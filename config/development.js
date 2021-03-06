import path from 'path';

export default {
    app: {
        host: 'localhost',
        port: 8000,
        jwtKey: 'GuJxOyUxLaUdKS17coYwdwEvAl5L0Du2zeA8NOTLNQ4=',
        defaultCurrency: 'ARS'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'localhost:8000/uploads'
    },
    emails: {
        from: {
            name: 'tienda765.com',
            email: 'contacto@bananacat.co'
        }
    },
    storefront: {
        label: 'tienda765.com',
        baseUrl: 'http://tienda765.com',
        defaultLocale: 'es'
    },
    switchPayments: {
        enabled: false,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    mailgun: {
        domain: 'tienda765.com',
        apiKey: 'key-749708a8273ff4982711cf7588a1ff37'
    }
}
