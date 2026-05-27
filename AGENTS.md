# 项目说明

- 在 PostgreSQL/Drizzle 的 schema 定义中，所有时间相关字段都必须使用 UTC-safe 的时间戳列。对于 `createdAt`、`updatedAt`、`deletedAt` 以及其他日期/时间审计字段，使用 `timestamp('<column_name>', { withTimezone: true })`。
- 应用时间字段不要使用普通的 `timestamp('<column_name>')`，因为它会映射为 `timestamp without time zone`。
