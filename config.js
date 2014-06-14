var appPath = process.cwd();
var config = {
    mongodb: {
        uri: 'mongodb://localhost/cms',
        options: {}
    },
    admin: {
        dir: 'admin',
        role: {
            admin: 'admin',
            user: 'user'
        }
    },
    upload: {
        tmpDir:  appPath + '/public/uploaded/tmp',
        uploadDir: appPath + '/public/uploaded/files',
        uploadUrl:  '/uploaded/files/',
        maxPostSize: 11000000000, // 11 GB
        minFileSize:  1,
        maxFileSize:  10000000000, // 10 GB
        acceptFileTypes:  /.+/i,
        // Files not matched by this regular expression force a download dialog,
        // to prevent executing any scripts in the context of the service domain:
        inlineFileTypes:  /\.(gif|jpe?g|png)/i,
        imageTypes:  /\.(gif|jpe?g|png)/i,
        imageVersions: {
            width:  80,
            height: 80
        },
        accessControl: {
            allowOrigin: '*',
            allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
            allowHeaders: 'Content-Type, Content-Range, Content-Disposition'
        }/*,
        storage : {
            type : 'aws',
            aws : {
                accessKeyId :  'xxxxxxxxxxxxxxxxx',
                secretAccessKey : 'xxxxxxxxxxxxxxxxx',
                region : 'us-east-1',//make sure you know the region, else leave this option out
                bucketName : 'xxxxxxxxxxxxxxxxx'
            }
        }*/
    }
};

module.exports = config;