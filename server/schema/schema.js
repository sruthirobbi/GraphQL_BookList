const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt} = graphql;

//dummy data
var books = [
    {name:'Book1',genre:'Fantasy',id:'1'},
    {name:'Book2',genre:'Fantasy',id:'2'},
    {name:'Book3',genre:'Sci-Fi',id:'3'}
];
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        price:{type: GraphQLInt}
    })

})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parent,args){
                //code to get data from db
                return _.find(books,{id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})

