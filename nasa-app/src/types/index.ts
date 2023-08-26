// Creamos un tipo de typescript para que lo usen los componentes

export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

// Tipos de las rutas y sus parametros
export type RootStackParams = {
  Home: undefined; // No recibe ningun parametro
  Detail: PostImage; // Recibe cualquiera de los elementos de arriba
};
