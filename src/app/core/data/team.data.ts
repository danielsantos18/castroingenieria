import { TeamMember } from '../models/team-member.model';

/** Equipo de trabajo (contenido del sitio real). */
export const TEAM: readonly TeamMember[] = [
  {
    name: 'Leonel Castro Olivo',
    role: 'Fundador y Director de Proyectos',
    bio: 'Líder de Castros Ingeniería SAS con amplia trayectoria en el diseño, planeación y ejecución de proyectos de construcción en Cartagena y la región Caribe. Su enfoque combina rigor técnico, cumplimiento de plazos y una atención cercana a cada cliente.',
    specialties: [
      'Dirección de proyectos',
      'Gestión de obra',
      'Estructuras',
      'Planeación y presupuesto',
    ],
    experience: '+15 años de experiencia',
    email: 'contacto@castrosingenieria.com',
  },
  {
    name: 'Xiomara Zabala',
    role: 'Cofundadora',
    bio: 'Cofundadora de Castros Ingeniería SAS, responsable de la gestión administrativa y la coordinación con clientes y proveedores. Vela por la calidad, la transparencia y el buen servicio en cada etapa del proyecto.',
    specialties: ['Gestión administrativa', 'Relación con clientes', 'Coordinación de recursos'],
    email: 'contacto@castrosingenieria.com',
  },
  //{ name: 'David Smith', role: 'Gerente' },
  //{ name: 'Mujhe Maro', role: 'Director' },
];
