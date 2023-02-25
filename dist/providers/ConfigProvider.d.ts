declare class ConfigProvider {
    static host(): string;
    static port(): number;
    static user(): string;
    static password(): string;
    static database(): string;
}
export default ConfigProvider;
