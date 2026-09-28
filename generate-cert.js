const selfsigned = require("selfsigned");
const fs = require("fs");

async function createCertificate() {

    const attrs = [
        {
            name: "commonName",
            value: "10.120.186.115"
        }
    ];

    const extensions = [
        {
            name: "subjectAltName",
            altNames: [
                {
                    type: 7,
                    ip: "10.120.186.115"
                }
            ]
        }
    ];

    const pems = await selfsigned.generate(
        attrs,
        {
            keyType: "rsa",
            keySize: 2048,
            extensions: extensions,
            days: 365
        }
    );

    fs.writeFileSync(
        "cert/key.pem",
        pems.private
    );

    fs.writeFileSync(
        "cert/cert.pem",
        pems.cert
    );

    console.log("");
    console.log("=================================");
    console.log("HTTPS CERTIFICATE CREATED");
    console.log("IP: 10.120.186.115");
    console.log("=================================");
    console.log("");

}

createCertificate().catch(console.error);