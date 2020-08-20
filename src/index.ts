import express from "express";
import { graphqlHTTP } from "express-graphql";
import fs from "fs";
import { GraphQLResolveInfo } from "graphql";
import Knex from "knex";
import { createSqlmancerClient, makeSqlmancerSchema } from "sqlmancer";

import { SqlmancerClient } from "./CteTest";


const knexInstance = Knex({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'user',
		password: 'password',
		database: 'ctetest'
	}
});

const schemaPath = './src/cteTest.graphql';
const {
	models: { Hobby }
} = createSqlmancerClient<SqlmancerClient>(schemaPath, knexInstance);

const resolvers = {
    Query: {
		hobbies: (root: any, args: { username: string }, ctx: any, resolveInfo: GraphQLResolveInfo) => {
			return Hobby
				.findMany()
				.where({ user: { username: { equal: args.username } } })
				.resolveInfo(resolveInfo)
				.execute();
		}
	}
};


fs.readFile(schemaPath, 'ascii', (err, typeDefs) => {
	const schema = makeSqlmancerSchema({
		typeDefs,
		resolvers
	});
	const app = express();
	app.use('/api', graphqlHTTP({
		schema,
		graphiql: true,
	}));
	app.listen(4000);
});