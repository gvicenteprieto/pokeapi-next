# PokeAPI Next.js Project

Proyecto desarrollado con **Next.js**, que integra autenticación con GitHub, envío de correos mediante **EmailJS**, estilos con **TailwindCSS**, y consumo de la **PokeAPI** para mostrar información dinámica de Pokémon.


## Tecnologías utilizadas
- Next.js – Framework React para aplicaciones web modernas.
- NextAuth.js – Autenticación con GitHub.
- EmailJS – Envío de correos desde el frontend.
- TailwindCSS – Estilos rápidos y responsive.
- PokeAPI – API pública para datos de Pokémon.


## Instalación y ejecución

Clonar el repositorio y entrar al directorio:
```bash
git clone https://github.com/gvicenteprieto/pokeapi-next.git
cd pokeapi-next
```

Instalar dependencias:
```bash
npm install
```

Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

Abrir http://localhost:3000 en el navegador.


## Variables de entorno
Crear un archivo `.env.local` en la raíz del proyecto con las claves:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
ADMIN_EMAIL=
```

## Estructura del proyecto
```
pokeapi-next/
 ├── app/                # Páginas y rutas principales
 ├── components/         # Componentes reutilizables (Header, Dashboard, etc.)
 ├── context/            # Contexto global (auth, estado)
 ├── public/             # Recursos estáticos
 ├── styles/             # Configuración de Tailwind y estilos globales
 ├── package.json        # Dependencias y scripts
 └── README.md           # Documentación del proyecto
```

## Funcionalidades principales
- Login con GitHub: acceso seguro mediante NextAuth.
- Dashboard básico: vista protegida para usuarios autenticados.
- Formulario de contacto: envío de correos con EmailJS y feedback visual.
- Consumo de PokeAPI: listado dinámico de Pokémon.


## Comandos útiles
```bash
npm run dev    # Ejecuta servidor de desarrollo
npm run build  # Compila la aplicación para producción
npm start      # Inicia la aplicación compilada
```


## Deploy futuro
Actualmente el proyecto se ejecuta en local.
Para desplegarlo, se recomienda usar plataformas como Vercel o Netlify.
