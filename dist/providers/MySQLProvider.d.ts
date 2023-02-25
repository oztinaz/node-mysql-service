import * as mysql from 'mysql';
declare class MySQLProvider {
    createPool(configuration: mysql.PoolConfig): mysql.Pool;
}
declare const _default: MySQLProvider;
export default _default;
