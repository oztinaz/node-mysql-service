import * as mysql from 'mysql'
import MySQLProvider from '../providers/MySQLProvider'

class MySQLService {

    private mysql: mysql.Pool

    constructor(configuration: mysql.PoolConfig) {
        this.mysql = MySQLProvider.createPool(configuration)
    }

    public select(query: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this.mysql.query(query, (error: mysql.MysqlError, results, fields) => {
                if (error) reject(error)
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }
}

export default MySQLService