# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (app directory), NextUI (v2) and Docker (with Docker Compose).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/LucasLeone/nextui-docker-template app-name
```

### Build and start the project

You have to run this command for build the docker image:
```
docker compose -f docker-compose.yml build
```

and then you have to up the container:
```
docker compose -f docker-compose.yml up
```

The NextApp is now in localhost:3000/

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
