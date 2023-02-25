class ConfigProvider {

    public static host(): string {
        if (process.env.MYSQL_HOST == undefined) {
            throw new Error('MYSQL_HOST must be specified as a string in .env file')
        }
    
        return process.env.MYSQL_HOST
    }

    public static port(): number {
        if (process.env.MYSQL_PORT == undefined) {
            throw new Error('MYSQL_PORT must be specified as an integer in .env file')
        }
    
        return parseInt(process.env.MYSQL_PORT)
    }

    public static user(): string {
        if (process.env.MYSQL_USER == undefined) {
            throw new Error('MYSQL_USER must be specified as a string in .env file')
        }
    
        return process.env.MYSQL_USER
    }

    public static password(): string {
        if (process.env.MYSQL_PASSWORD == undefined) {
            throw new Error('MYSQL_PASSWORD must be specified as a string in .env file')
        }
    
        return process.env.MYSQL_PASSWORD
    }

    public static database(): string {
        if (process.env.MYSQL_DATABASE == undefined) {
            throw new Error('MYSQL_DATABASE must be specified as a string in .env file')
        }
    
        return process.env.MYSQL_DATABASE
    }
}

export default ConfigProvider