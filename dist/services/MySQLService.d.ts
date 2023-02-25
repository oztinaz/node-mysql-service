declare class MySQLService {
    private mysql;
    constructor();
    select(query: string): Promise<object>;
    private configuration;
}
declare const _default: MySQLService;
export default _default;
