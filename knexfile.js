export default  {
    development:{
        client: "pg",
        connection: {
            database: "app",
            user: "admin",
            password: "admin"
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    },
    production:{

    }
}