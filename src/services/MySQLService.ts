import * as mysql from 'mysql'
import ConfigProvider from '../providers/ConfigProvider'

class MySQLService {

    private mysql: mysql.Pool

    constructor() {
        this.mysql = mysql.createPool(this.configuration())
    }

    public select(query: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this.mysql.query(query, (error: mysql.MysqlError, results, fields) => {
                if (error) reject(error)
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    private configuration(): mysql.ConnectionConfig {
        return {
            host: ConfigProvider.host(),
            user: ConfigProvider.user(),
            password: ConfigProvider.password(),
            database: ConfigProvider.database()
        }
    }
}

export default new MySQLService