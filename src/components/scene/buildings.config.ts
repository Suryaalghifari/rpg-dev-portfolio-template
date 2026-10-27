export interface BuildingItemConfig {
  id: string;
  name: string;
  bubbleText: string;
  targetSection: string;
  x: number;
  y: number;
  labelZ: number;
  hasChimney?: boolean;
}

export const BUILDINGS_CONFIG: BuildingItemConfig[] = [
  {
    id: 'about',
    name: 'Tentang',
    bubbleText: 'Mampir dulu? Kenalan di sini.',
    targetSection: 'about',
    x: 60,
    y: 60,
    labelZ: 155,
    hasChimney: true,
  },
  {
    id: 'projects',
    name: 'Proyek',
    bubbleText: 'Lihat hasil kerjaku.',
    targetSection: 'projects',
    x: 390,
    y: 60,
    labelZ: 125,
    hasChimney: true,
  },
  {
    id: 'skills',
    name: 'Skill',
    bubbleText: 'Perkakas yang kupakai.',
    targetSection: 'skills',
    x: 60,
    y: 390,
    labelZ: 90,
    hasChimney: false,
  },
  {
    id: 'appraisal',
    name: 'Cek Resume',
    bubbleText: 'Balai Guild: Audit lisensi resumemu.',
    targetSection: 'appraisal',
    x: 240,
    y: 240,
    labelZ: 160,
    hasChimney: false,
  },
  {
    id: 'contact',
    name: 'Kontak',
    bubbleText: 'Kirim kabar lewat sini.',
    targetSection: 'contact',
    x: 390,
    y: 390,
    labelZ: 185,
    hasChimney: false,
  },
];
