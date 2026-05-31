# API v4 Documentation

Base URL: `/api/v4/base_260530.php`

## Authentication
None required (add if needed).

## Response Format
All responses return JSON:
```json
{
  "code": 200,
  "message": "Success",
  "data": {}
}
```

Error responses:
```json
{
  "code": 400,
  "message": "Error description"
}
```

## HTTP Status Codes
- `200` - Success
- `204` - No content (OPTIONS)
- `400` - Bad request (missing/invalid fields)
- `404` - Endpoint not found
- `500` - Server error

---

## Endpoints

### POST /codes
Generate a new unique code.

**Request:**
```
POST /codes
```

**Response:**
```json
{
  "code": 200,
  "message": "Code generated",
  "data": {
    "code": "C-20260530-185042-a7f"
  }
}
```

---

### POST /registrations
Save user registration data.

**Request:**
```
POST /registrations
Content-Type: application/x-www-form-urlencoded

code=C-20260530-185042-a7f
name=John Doe
email=john@example.com  (optional)
age=25  (optional)
gender=Male  (optional)
others={"bio": "..."}  (optional)
event=event_name  (optional)
```

**Required Fields:**
- `code` - Unique code (string)
- `name` - Full name (string)

**Optional Fields:**
- `email` - Valid email (string)
- `age` - Integer age (int)
- `gender` - Gender (string)
- `others` - Additional info (JSON/text)
- `event` - Event name (string)

**Response:**
```json
{
  "code": 200,
  "message": "Registration saved"
}
```

**Errors:**
- `400` - Missing required fields
- `400` - Invalid email format (if provided)
- `400` - Age must be an integer (if provided)

---

### POST /results
Save test result scores.

**Request:**
```
POST /results
Content-Type: application/x-www-form-urlencoded

code=C-20260530-185042-a7f
event=event_name
email=john@example.com  (optional)
start=2026-05-30 10:00:00  (optional)
end=2026-05-30 10:15:00  (optional)
p_ca=8
p_ev=7
p_in=9
p_he=6
p_ex=8
p_re=7
p_lo=9
p_cr=8
p_en=7
p_sa=8
p_ma=6
p_ru=9
top_persona=Persona A  (optional)
top_shadow=Shadow B  (optional)
top_self=Self C  (optional)
```

**Required Fields:**
- `code` - Registration code (string)
- `event` - Event name (string)

**Optional Fields:**
- `email` - Email (string)
- `start` - Start timestamp (datetime)
- `end` - End timestamp (datetime)
- `p_ca`, `p_ev`, `p_in`, `p_he`, `p_ex`, `p_re`, `p_lo`, `p_cr`, `p_en`, `p_sa`, `p_ma`, `p_ru` - Persona scores (int, 0-10)
- `top_persona` - Top persona result (string)
- `top_shadow` - Top shadow result (string)
- `top_self` - Top self result (string)

**Response:**
```json
{
  "code": 200,
  "message": "Result saved"
}
```

---

### GET /data
Retrieve registration and result data for a code.

**Request:**
```
GET /data?code=C-20260530-185042-a7f&no_reg=false
```

**Query Parameters:**
- `code` - Registration code (required, string)
- `no_reg` - Skip registration check (optional, boolean)

**Response:**
```json
{
  "code": 200,
  "message": "Data retrieved",
  "data": {
    "dataReg": [
      {
        "code": "C-20260530-185042-a7f",
        "name": "John Doe",
        "email": "john@example.com",
        "age": 25,
        "gender": "Male",
        "others": null,
        "event": "event_name"
      }
    ],
    "dataResult": [
      {
        "code": "C-20260530-185042-a7f",
        "event": "event_name",
        "p_ca": 8,
        "top_persona": "Persona A"
      }
    ]
  }
}
```

---

### POST /personas
Save persona snapshot.

**Request:**
```
POST /personas
Content-Type: application/x-www-form-urlencoded

code=C-20260530-185042-a7f
name=John Doe
event=event_name
persona={"traits": [...]}  (optional, JSON as string)
```

**Required Fields:**
- `code` - Registration code (string)
- `name` - User name (string)
- `event` - Event name (string)

**Optional Fields:**
- `persona` - Persona data (string/JSON)

**Response:**
```json
{
  "code": 200,
  "message": "Persona saved"
}
```

**Notes:**
- Timestamp is auto-generated on server
- Uses DUPLICATE KEY UPDATE to handle retries

---

### GET /personas
Retrieve personas with optional filters.

**Request:**
```
GET /personas?event=event_name&after=2026-05-30%2010:00:00
```

**Query Parameters:**
- `event` - Filter by event (optional, string)
- `after` - Only personas after timestamp (optional, datetime)

**Response:**
```json
{
  "code": 200,
  "message": "Data found",
  "data": {
    "personas": [
      {
        "code": "C-20260530-185042-a7f",
        "name": "John Doe",
        "persona": "{...}"
      }
    ]
  }
}
```

**Behavior:**
1. First tries to fetch finished personas (persona IS NOT NULL) with limit 6
2. If none found and event filter exists, fetches latest unfinished row
3. Returns empty array if nothing found

---

## Examples

### Complete Registration Flow
```bash
# Generate code
curl -X POST http://localhost/api/v4/base_260530.php/codes

# Register user
curl -X POST http://localhost/api/v4/base_260530.php/registrations \
  -d "code=C-20260530-185042-a7f&name=John&email=john@example.com&age=25&gender=M&event=test"

# Submit results
curl -X POST http://localhost/api/v4/base_260530.php/results \
  -d "code=C-20260530-185042-a7f&event=test&p_ca=8&p_ev=7"

# Retrieve data
curl "http://localhost/api/v4/base_260530.php/data?code=C-20260530-185042-a7f"
```

---

## Security Notes
- All queries use prepared statements (SQL injection protected)
- Input validation on email and integer fields
- Server errors logged (not exposed to client)
- CORS enabled for all origins (restrict if needed)

## Database Tables
- `reg_v5` - Registration records (primary key: code)
- `result_v4` - Result records (primary key: code)
- `persona_v4` - Persona snapshots (primary key: code)
