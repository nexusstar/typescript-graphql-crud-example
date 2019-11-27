import {Arg, Resolver, Mutation, Int, Query} from 'type-graphql';
import {Movie} from '../entity/Movie';

@Resolver()
export class MovieResolver{
  @Mutation(() => Boolean) //tell what the return value would be
  async createMovie(
    @Arg('title', () => String) title: string,
    @Arg('minutes', () => Int) minutes: number,
  ) {
    await Movie.insert({title, minutes})
      return true;
    }

    // to specify GraphQL type
    // need to be @ObjectType in entity
    // That how we specify class type
    @Query(() => [Movie])
    movies(){
      return Movie.find();
    }
}
