import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs'
import * as apigw from 'aws-cdk-lib/aws-apigateway'

export class GqlApiExStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create a new lambda from node js function 
        const graphqlHandler = new lambda.NodejsFunction(this, 'GraphqlHandler', {
            entry: 'src/index.js',
            handler: 'handler' // This defaults btw, just explicitly setting it
        })

        // Connect handler to apigw
        new apigw.LambdaRestApi(this, 'GraphqlEndpoint', {
            handler: graphqlHandler
        })

    }
}
