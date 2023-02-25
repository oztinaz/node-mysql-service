import * as mysql from 'mysql'

class MySQLProvider {

    public createPool(configuration: mysql.PoolConfig) {
        return mysql.createPool(configuration)
    }
}

export default new MySQLProvider