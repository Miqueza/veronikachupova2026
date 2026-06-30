# nikachupova

Статический React/Vite сайт-приглашение на день рождения Вероники.

## Стек

- Vite + React + TypeScript
- Tailwind CSS / shadcn-ui компоненты
- Docker: build stage `node:22-alpine`, runtime `nginx:1.27-alpine`

## Пути и публикация

- Проект: `/home/chupuezahe/workspace/projects/nikachupova`
- GitHub: `git@github.com:Miqueza/veronikachupova2026.git`
- Контейнер: `nikachupova`
- Локальный upstream: `127.0.0.1:8331`
- Публичный домен: `https://nikachupova.ru`
- Nginx vhost: `/etc/nginx/conf.d/nikachupova.ru.conf`

## Команды

```bash
npm ci
npm run lint
npm run test
npm run build

docker compose up -d --build
curl -I http://127.0.0.1:8331/
```

## Деплой

1. Проверить, что `nikachupova.ru` указывает на текущий VPS `82.146.58.193`.
2. Собрать проект: `docker compose up -d --build`.
3. Проверить локально: `curl http://127.0.0.1:8331/`.
4. Проверить nginx: `sudo nginx -t`.
5. Перезагрузить nginx: `sudo systemctl reload nginx`.
6. Проверить публично: `curl https://nikachupova.ru/` и убедиться по title/H1, что это сайт Вероники, а не fallback/Beinform/Natalia.

## Секреты

Секретов у проекта нет.
