import * as mysql from 'mysql';
declare class MySQLService {
    private mysql;
    constructor(configuration: mysql.PoolConfig);
    select(query: string): Promise<object>;
}
export default MySQLService;
