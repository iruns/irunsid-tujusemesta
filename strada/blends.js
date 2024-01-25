/**
Petunjuk edit:
1. Cari blend yang akan diubah jumlah bean-nya
2. Ganti angka di bean ke jumlah yang diinginkan. Angkanya akan x 100 gram. Misal 0.5 akan menjadi 50 gram.
3. Pastikan total jumlah semua bean = 1

   contoh:
    asal:

      label: 'Primadona Berani',
        beans: {
        Ga: {
          label: 'Gayo',
            amount: 0.5,
            },
        Ft: {
          label: 'Fine Robusta Temanggung',
            amount: 0.5,
            },
      }
    
    jadi:

      label: 'Primadona Berani',
        beans: {
        Ga: {
          label: 'Gayo',
            amount: 0.75,
            },
        Ft: {
          label: 'Fine Robusta Temanggung',
            amount: 0.25,
            },
      }
4. Reload aplikasi di hp dan jumlah bean seharusnya sudah berubah. Bila tidak berubah, kemungkinan ada kesalahan di hasil edit. Silakan cek lagi atau hubungi developer.

Peringatan:
- Hanya ubah angka di bean, jangan mengubah teks lainnya!
- Pengubahan teks lainnya bisa menyebabkan hasil yang tidak diinginkan

*/

if (!window.strada) window.strada = {}
window.strada.blends = {
  1: {
    label: 'Primadona Berani',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 0.5,
      },
      Ft: {
        label: 'Fine Robusta Temanggung',
        amount: 0.5,
      },
    },
  },
  2: {
    label: 'Kokoh Gembira',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 0.5,
      },
      Ba: {
        label: 'Bali',
        amount: 0.5,
      },
    },
  },
  3: {
    label: 'Kokoh Kelana',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 0.4,
      },
      To: {
        label: 'Toraja',
        amount: 0.3,
      },
      Ba: {
        label: 'Bali',
        amount: 0.3,
      },
    },
  },
  4: {
    label: 'Harmoni Gembira',
    beans: {
      Jb: {
        label: 'Jawa Barat',
        amount: 0.8,
      },
      Ba: {
        label: 'Bali',
        amount: 0.2,
      },
    },
  },
  5: {
    label: 'Harmoni Ceria',
    beans: {
      Jb: {
        label: 'Jawa Barat',
        amount: 0.8,
      },
      Sn: {
        label: 'Seasonal Natural',
        amount: 0.2,
      },
    },
  },
  6: {
    label: 'Primadona Riang',
    beans: {
      Fl: {
        label: 'Flores',
        amount: 0.5,
      },
      Ft: {
        label: 'Fine Robusta Temanggung',
        amount: 0.5,
      },
    },
  },
  7: {
    label: 'Primadona Kokoh',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 0.25,
      },
      Fl: {
        label: 'Flores',
        amount: 0.25,
      },
      Ft: {
        label: 'Fine Robusta Temanggung',
        amount: 0.5,
      },
    },
  },
  8: {
    label: 'Kawan Primadona',
    beans: {
      To: {
        label: 'Toraja',
        amount: 0.7,
      },
      Ft: {
        label: 'Fine Robusta Temanggung',
        amount: 0.3,
      },
    },
  },
  9: {
    label: 'Embun Gembira',
    beans: {
      Pa: {
        label: 'Papua',
        amount: 0.5,
      },
      Ba: {
        label: 'Bali',
        amount: 0.5,
      },
    },
  },
  10: {
    label: 'Kawan Kelana',
    beans: {
      To: {
        label: 'Toraja',
        amount: 0.2,
      },
      Fl: {
        label: 'Flores',
        amount: 0.6,
      },
      Ba: {
        label: 'Bali',
        amount: 0.2,
      },
    },
  },
  11: {
    label: 'Kawan Kokoh',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 0.25,
      },
      Fl: {
        label: 'Flores',
        amount: 0.5,
      },
      Ba: {
        label: 'Bali',
        amount: 0.25,
      },
    },
  },
  12: {
    label: 'Gelora Energi',
    beans: {
      Da: {
        label: 'Dark Roast Arabica',
        amount: 0.8,
      },
      Dr: {
        label: 'Dark Roast Robusta',
        amount: 0.2,
      },
    },
  },
  13: {
    label: 'Ledakan Asa',
    beans: {
      Da: {
        label: 'Dark Roast Arabica',
        amount: 0.2,
      },
      Dr: {
        label: 'Dark Roast Robusta',
        amount: 0.8,
      },
    },
  },
  14: {
    label: 'Kawan Ceria',
    beans: {
      To: {
        label: 'Toraja',
        amount: 0.75,
      },
      Sn: {
        label: 'Seasonal Natural',
        amount: 0.25,
      },
    },
  },
  15: {
    label: 'Embun Ceria',
    beans: {
      Sn: {
        label: 'Seasonal Natural',
        amount: 0.25,
      },
      Pa: {
        label: 'Papua',
        amount: 0.75,
      },
    },
  },
  16: {
    label: 'Jejak Gembira',
    beans: {
      Sf: {
        label: 'Seasonal Fullwash',
        amount: 0.5,
      },
      Ba: {
        label: 'Bali',
        amount: 0.5,
      },
    },
  },
  17: {
    label: 'Kokoh Berani',
    beans: {
      Ga: {
        label: 'Gayo',
        amount: 1,
      },
    },
  },
  18: {
    label: 'Harmoni Nostalgia',
    beans: {
      Jb: {
        label: 'Jawa Barat',
        amount: 1,
      },
    },
  },
  19: {
    label: 'Primadona',
    beans: {
      Ft: {
        label: 'Fine Robusta Temanggung',
        amount: 1,
      },
    },
  },
  20: {
    label: 'Rona Gembira',
    beans: {
      Ba: {
        label: 'Bali',
        amount: 1,
      },
    },
  },
  21: {
    label: 'Embun Sejuk',
    beans: {
      Fl: {
        label: 'Flores',
        amount: 1,
      },
    },
  },
  22: {
    label: 'Kawan Riang',
    beans: {
      To: {
        label: 'Toraja',
        amount: 1,
      },
    },
  },
  23: {
    label: 'Kelana Senja',
    beans: {
      Pa: {
        label: 'Papua',
        amount: 1,
      },
    },
  },
  24: {
    label: 'Gelora Asa',
    beans: {
      Da: {
        label: 'Dark Roast Arabica',
        amount: 1,
      },
    },
  },
  25: {
    label: 'Ledakan Energi',
    beans: {
      Dr: {
        label: 'Dark Roast Robusta',
        amount: 1,
      },
    },
  },
  26: {
    label: 'Jejak Hening',
    beans: {
      Sf: {
        label: 'Seasonal Fullwash',
        amount: 1,
      },
    },
  },
  27: {
    label: 'Mentari Ceria',
    beans: {
      Sn: {
        label: 'Seasonal Natural',
        amount: 1,
      },
    },
  },
  28: {
    label: 'Nada Jingga',
    beans: {
      Se: {
        label: 'Seasonal',
        amount: 1,
      },
    },
  },
}
