
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserDailyActivity
 * 
 */
export type UserDailyActivity = $Result.DefaultSelection<Prisma.$UserDailyActivityPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model TestCaseResult
 * 
 */
export type TestCaseResult = $Result.DefaultSelection<Prisma.$TestCaseResultPayload>
/**
 * Model ProblemSolved
 * 
 */
export type ProblemSolved = $Result.DefaultSelection<Prisma.$ProblemSolvedPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model ProblemsInPlaylist
 * 
 */
export type ProblemsInPlaylist = $Result.DefaultSelection<Prisma.$ProblemsInPlaylistPayload>
/**
 * Model Contest
 * 
 */
export type Contest = $Result.DefaultSelection<Prisma.$ContestPayload>
/**
 * Model ContestProblem
 * 
 */
export type ContestProblem = $Result.DefaultSelection<Prisma.$ContestProblemPayload>
/**
 * Model ContestRegistration
 * 
 */
export type ContestRegistration = $Result.DefaultSelection<Prisma.$ContestRegistrationPayload>
/**
 * Model ContestSubmission
 * 
 */
export type ContestSubmission = $Result.DefaultSelection<Prisma.$ContestSubmissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PlanType: {
  FREE: 'FREE',
  PRO: 'PRO'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDailyActivity`: Exposes CRUD operations for the **UserDailyActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDailyActivities
    * const userDailyActivities = await prisma.userDailyActivity.findMany()
    * ```
    */
  get userDailyActivity(): Prisma.UserDailyActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCaseResult`: Exposes CRUD operations for the **TestCaseResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCaseResults
    * const testCaseResults = await prisma.testCaseResult.findMany()
    * ```
    */
  get testCaseResult(): Prisma.TestCaseResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **ProblemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.ProblemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemsInPlaylist`: Exposes CRUD operations for the **ProblemsInPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemsInPlaylists
    * const problemsInPlaylists = await prisma.problemsInPlaylist.findMany()
    * ```
    */
  get problemsInPlaylist(): Prisma.ProblemsInPlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contest`: Exposes CRUD operations for the **Contest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contests
    * const contests = await prisma.contest.findMany()
    * ```
    */
  get contest(): Prisma.ContestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestProblem`: Exposes CRUD operations for the **ContestProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestProblems
    * const contestProblems = await prisma.contestProblem.findMany()
    * ```
    */
  get contestProblem(): Prisma.ContestProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestRegistration`: Exposes CRUD operations for the **ContestRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestRegistrations
    * const contestRegistrations = await prisma.contestRegistration.findMany()
    * ```
    */
  get contestRegistration(): Prisma.ContestRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestSubmission`: Exposes CRUD operations for the **ContestSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestSubmissions
    * const contestSubmissions = await prisma.contestSubmission.findMany()
    * ```
    */
  get contestSubmission(): Prisma.ContestSubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserDailyActivity: 'UserDailyActivity',
    Problem: 'Problem',
    Submission: 'Submission',
    TestCaseResult: 'TestCaseResult',
    ProblemSolved: 'ProblemSolved',
    Playlist: 'Playlist',
    ProblemsInPlaylist: 'ProblemsInPlaylist',
    Contest: 'Contest',
    ContestProblem: 'ContestProblem',
    ContestRegistration: 'ContestRegistration',
    ContestSubmission: 'ContestSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userDailyActivity" | "problem" | "submission" | "testCaseResult" | "problemSolved" | "playlist" | "problemsInPlaylist" | "contest" | "contestProblem" | "contestRegistration" | "contestSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDailyActivity: {
        payload: Prisma.$UserDailyActivityPayload<ExtArgs>
        fields: Prisma.UserDailyActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDailyActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDailyActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          findFirst: {
            args: Prisma.UserDailyActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDailyActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          findMany: {
            args: Prisma.UserDailyActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>[]
          }
          create: {
            args: Prisma.UserDailyActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          createMany: {
            args: Prisma.UserDailyActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDailyActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>[]
          }
          delete: {
            args: Prisma.UserDailyActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          update: {
            args: Prisma.UserDailyActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          deleteMany: {
            args: Prisma.UserDailyActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDailyActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDailyActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>[]
          }
          upsert: {
            args: Prisma.UserDailyActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDailyActivityPayload>
          }
          aggregate: {
            args: Prisma.UserDailyActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDailyActivity>
          }
          groupBy: {
            args: Prisma.UserDailyActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDailyActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDailyActivityCountArgs<ExtArgs>
            result: $Utils.Optional<UserDailyActivityCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestCaseResult: {
        payload: Prisma.$TestCaseResultPayload<ExtArgs>
        fields: Prisma.TestCaseResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findFirst: {
            args: Prisma.TestCaseResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findMany: {
            args: Prisma.TestCaseResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          create: {
            args: Prisma.TestCaseResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          createMany: {
            args: Prisma.TestCaseResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          delete: {
            args: Prisma.TestCaseResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          update: {
            args: Prisma.TestCaseResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          deleteMany: {
            args: Prisma.TestCaseResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCaseResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          upsert: {
            args: Prisma.TestCaseResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          aggregate: {
            args: Prisma.TestCaseResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCaseResult>
          }
          groupBy: {
            args: Prisma.TestCaseResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultCountAggregateOutputType> | number
          }
        }
      }
      ProblemSolved: {
        payload: Prisma.$ProblemSolvedPayload<ExtArgs>
        fields: Prisma.ProblemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findFirst: {
            args: Prisma.ProblemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findMany: {
            args: Prisma.ProblemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          create: {
            args: Prisma.ProblemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          createMany: {
            args: Prisma.ProblemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          delete: {
            args: Prisma.ProblemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          update: {
            args: Prisma.ProblemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.ProblemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.ProblemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.ProblemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      ProblemsInPlaylist: {
        payload: Prisma.$ProblemsInPlaylistPayload<ExtArgs>
        fields: Prisma.ProblemsInPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemsInPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemsInPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          findFirst: {
            args: Prisma.ProblemsInPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemsInPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          findMany: {
            args: Prisma.ProblemsInPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>[]
          }
          create: {
            args: Prisma.ProblemsInPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          createMany: {
            args: Prisma.ProblemsInPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemsInPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>[]
          }
          delete: {
            args: Prisma.ProblemsInPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          update: {
            args: Prisma.ProblemsInPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.ProblemsInPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemsInPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemsInPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.ProblemsInPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsInPlaylistPayload>
          }
          aggregate: {
            args: Prisma.ProblemsInPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemsInPlaylist>
          }
          groupBy: {
            args: Prisma.ProblemsInPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemsInPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemsInPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemsInPlaylistCountAggregateOutputType> | number
          }
        }
      }
      Contest: {
        payload: Prisma.$ContestPayload<ExtArgs>
        fields: Prisma.ContestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findFirst: {
            args: Prisma.ContestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findMany: {
            args: Prisma.ContestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          create: {
            args: Prisma.ContestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          createMany: {
            args: Prisma.ContestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          delete: {
            args: Prisma.ContestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          update: {
            args: Prisma.ContestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          deleteMany: {
            args: Prisma.ContestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          upsert: {
            args: Prisma.ContestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          aggregate: {
            args: Prisma.ContestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContest>
          }
          groupBy: {
            args: Prisma.ContestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestCountArgs<ExtArgs>
            result: $Utils.Optional<ContestCountAggregateOutputType> | number
          }
        }
      }
      ContestProblem: {
        payload: Prisma.$ContestProblemPayload<ExtArgs>
        fields: Prisma.ContestProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          findFirst: {
            args: Prisma.ContestProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          findMany: {
            args: Prisma.ContestProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>[]
          }
          create: {
            args: Prisma.ContestProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          createMany: {
            args: Prisma.ContestProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>[]
          }
          delete: {
            args: Prisma.ContestProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          update: {
            args: Prisma.ContestProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          deleteMany: {
            args: Prisma.ContestProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>[]
          }
          upsert: {
            args: Prisma.ContestProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestProblemPayload>
          }
          aggregate: {
            args: Prisma.ContestProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestProblem>
          }
          groupBy: {
            args: Prisma.ContestProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ContestProblemCountAggregateOutputType> | number
          }
        }
      }
      ContestRegistration: {
        payload: Prisma.$ContestRegistrationPayload<ExtArgs>
        fields: Prisma.ContestRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          findFirst: {
            args: Prisma.ContestRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          findMany: {
            args: Prisma.ContestRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>[]
          }
          create: {
            args: Prisma.ContestRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          createMany: {
            args: Prisma.ContestRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>[]
          }
          delete: {
            args: Prisma.ContestRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          update: {
            args: Prisma.ContestRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.ContestRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.ContestRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestRegistrationPayload>
          }
          aggregate: {
            args: Prisma.ContestRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestRegistration>
          }
          groupBy: {
            args: Prisma.ContestRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<ContestRegistrationCountAggregateOutputType> | number
          }
        }
      }
      ContestSubmission: {
        payload: Prisma.$ContestSubmissionPayload<ExtArgs>
        fields: Prisma.ContestSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContestSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContestSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContestSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContestSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContestSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          update: {
            args: Prisma.ContestSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContestSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContestSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContestSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestSubmission>
          }
          groupBy: {
            args: Prisma.ContestSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContestSubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userDailyActivity?: UserDailyActivityOmit
    problem?: ProblemOmit
    submission?: SubmissionOmit
    testCaseResult?: TestCaseResultOmit
    problemSolved?: ProblemSolvedOmit
    playlist?: PlaylistOmit
    problemsInPlaylist?: ProblemsInPlaylistOmit
    contest?: ContestOmit
    contestProblem?: ContestProblemOmit
    contestRegistration?: ContestRegistrationOmit
    contestSubmission?: ContestSubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    submission: number
    problemSolved: number
    playlists: number
    dailyActivities: number
    contestRegistrations: number
    contestSubmissions: number
    contestsCreated: number
    contest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    dailyActivities?: boolean | UserCountOutputTypeCountDailyActivitiesArgs
    contestRegistrations?: boolean | UserCountOutputTypeCountContestRegistrationsArgs
    contestSubmissions?: boolean | UserCountOutputTypeCountContestSubmissionsArgs
    contestsCreated?: boolean | UserCountOutputTypeCountContestsCreatedArgs
    contest?: boolean | UserCountOutputTypeCountContestArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDailyActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number
    solvedBy: number
    problemsPlaylists: number
    contestProblems: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
    problemsPlaylists?: boolean | ProblemCountOutputTypeCountProblemsPlaylistsArgs
    contestProblems?: boolean | ProblemCountOutputTypeCountContestProblemsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemsPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsInPlaylistWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountContestProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestProblemWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testCases: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SubmissionCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsInPlaylistWhereInput
  }


  /**
   * Count Type ContestCountOutputType
   */

  export type ContestCountOutputType = {
    problems: number
    registrations: number
    contestSubmissions: number
  }

  export type ContestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | ContestCountOutputTypeCountProblemsArgs
    registrations?: boolean | ContestCountOutputTypeCountRegistrationsArgs
    contestSubmissions?: boolean | ContestCountOutputTypeCountContestSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCountOutputType
     */
    select?: ContestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestProblemWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestRegistrationWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountContestSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    currentStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    currentStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    isBlocked: boolean | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
    plan: $Enums.PlanType | null
    subscriptionExpires: Date | null
    lastActivityDate: Date | null
    currentStreak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    isBlocked: boolean | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
    plan: $Enums.PlanType | null
    subscriptionExpires: Date | null
    lastActivityDate: Date | null
    currentStreak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    password: number
    isBlocked: number
    isEmailVerified: number
    emailVerificationToken: number
    emailVerificationExpires: number
    plan: number
    subscriptionExpires: number
    lastActivityDate: number
    currentStreak: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentStreak?: true
  }

  export type UserSumAggregateInputType = {
    currentStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    isBlocked?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpires?: true
    plan?: true
    subscriptionExpires?: true
    lastActivityDate?: true
    currentStreak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    isBlocked?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpires?: true
    plan?: true
    subscriptionExpires?: true
    lastActivityDate?: true
    currentStreak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    isBlocked?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpires?: true
    plan?: true
    subscriptionExpires?: true
    lastActivityDate?: true
    currentStreak?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    image: string | null
    role: $Enums.UserRole
    password: string
    isBlocked: boolean
    isEmailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
    plan: $Enums.PlanType
    subscriptionExpires: Date | null
    lastActivityDate: Date | null
    currentStreak: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpires?: boolean
    plan?: boolean
    subscriptionExpires?: boolean
    lastActivityDate?: boolean
    currentStreak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    dailyActivities?: boolean | User$dailyActivitiesArgs<ExtArgs>
    contestRegistrations?: boolean | User$contestRegistrationsArgs<ExtArgs>
    contestSubmissions?: boolean | User$contestSubmissionsArgs<ExtArgs>
    contestsCreated?: boolean | User$contestsCreatedArgs<ExtArgs>
    contest?: boolean | User$contestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpires?: boolean
    plan?: boolean
    subscriptionExpires?: boolean
    lastActivityDate?: boolean
    currentStreak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpires?: boolean
    plan?: boolean
    subscriptionExpires?: boolean
    lastActivityDate?: boolean
    currentStreak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpires?: boolean
    plan?: boolean
    subscriptionExpires?: boolean
    lastActivityDate?: boolean
    currentStreak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "role" | "password" | "isBlocked" | "isEmailVerified" | "emailVerificationToken" | "emailVerificationExpires" | "plan" | "subscriptionExpires" | "lastActivityDate" | "currentStreak" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    dailyActivities?: boolean | User$dailyActivitiesArgs<ExtArgs>
    contestRegistrations?: boolean | User$contestRegistrationsArgs<ExtArgs>
    contestSubmissions?: boolean | User$contestSubmissionsArgs<ExtArgs>
    contestsCreated?: boolean | User$contestsCreatedArgs<ExtArgs>
    contest?: boolean | User$contestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      dailyActivities: Prisma.$UserDailyActivityPayload<ExtArgs>[]
      contestRegistrations: Prisma.$ContestRegistrationPayload<ExtArgs>[]
      contestSubmissions: Prisma.$ContestSubmissionPayload<ExtArgs>[]
      contestsCreated: Prisma.$ContestPayload<ExtArgs>[]
      contest: Prisma.$ContestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      image: string | null
      role: $Enums.UserRole
      password: string
      isBlocked: boolean
      isEmailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationExpires: Date | null
      plan: $Enums.PlanType
      subscriptionExpires: Date | null
      lastActivityDate: Date | null
      currentStreak: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends User$submissionArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyActivities<T extends User$dailyActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestRegistrations<T extends User$contestRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$contestRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestSubmissions<T extends User$contestSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contestSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestsCreated<T extends User$contestsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$contestsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contest<T extends User$contestArgs<ExtArgs> = {}>(args?: Subset<T, User$contestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationExpires: FieldRef<"User", 'DateTime'>
    readonly plan: FieldRef<"User", 'PlanType'>
    readonly subscriptionExpires: FieldRef<"User", 'DateTime'>
    readonly lastActivityDate: FieldRef<"User", 'DateTime'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submission
   */
  export type User$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.dailyActivities
   */
  export type User$dailyActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    where?: UserDailyActivityWhereInput
    orderBy?: UserDailyActivityOrderByWithRelationInput | UserDailyActivityOrderByWithRelationInput[]
    cursor?: UserDailyActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDailyActivityScalarFieldEnum | UserDailyActivityScalarFieldEnum[]
  }

  /**
   * User.contestRegistrations
   */
  export type User$contestRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    where?: ContestRegistrationWhereInput
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    cursor?: ContestRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestRegistrationScalarFieldEnum | ContestRegistrationScalarFieldEnum[]
  }

  /**
   * User.contestSubmissions
   */
  export type User$contestSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    where?: ContestSubmissionWhereInput
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    cursor?: ContestSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestSubmissionScalarFieldEnum | ContestSubmissionScalarFieldEnum[]
  }

  /**
   * User.contestsCreated
   */
  export type User$contestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    cursor?: ContestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * User.contest
   */
  export type User$contestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    cursor?: ContestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDailyActivity
   */

  export type AggregateUserDailyActivity = {
    _count: UserDailyActivityCountAggregateOutputType | null
    _min: UserDailyActivityMinAggregateOutputType | null
    _max: UserDailyActivityMaxAggregateOutputType | null
  }

  export type UserDailyActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDailyActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDailyActivityCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserDailyActivityMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDailyActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDailyActivityCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserDailyActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDailyActivity to aggregate.
     */
    where?: UserDailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDailyActivities to fetch.
     */
    orderBy?: UserDailyActivityOrderByWithRelationInput | UserDailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDailyActivities
    **/
    _count?: true | UserDailyActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDailyActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDailyActivityMaxAggregateInputType
  }

  export type GetUserDailyActivityAggregateType<T extends UserDailyActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDailyActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDailyActivity[P]>
      : GetScalarType<T[P], AggregateUserDailyActivity[P]>
  }




  export type UserDailyActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDailyActivityWhereInput
    orderBy?: UserDailyActivityOrderByWithAggregationInput | UserDailyActivityOrderByWithAggregationInput[]
    by: UserDailyActivityScalarFieldEnum[] | UserDailyActivityScalarFieldEnum
    having?: UserDailyActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDailyActivityCountAggregateInputType | true
    _min?: UserDailyActivityMinAggregateInputType
    _max?: UserDailyActivityMaxAggregateInputType
  }

  export type UserDailyActivityGroupByOutputType = {
    id: string
    userId: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: UserDailyActivityCountAggregateOutputType | null
    _min: UserDailyActivityMinAggregateOutputType | null
    _max: UserDailyActivityMaxAggregateOutputType | null
  }

  type GetUserDailyActivityGroupByPayload<T extends UserDailyActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDailyActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDailyActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDailyActivityGroupByOutputType[P]>
            : GetScalarType<T[P], UserDailyActivityGroupByOutputType[P]>
        }
      >
    >


  export type UserDailyActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDailyActivity"]>

  export type UserDailyActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDailyActivity"]>

  export type UserDailyActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDailyActivity"]>

  export type UserDailyActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserDailyActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["userDailyActivity"]>
  export type UserDailyActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDailyActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDailyActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDailyActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDailyActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userDailyActivity"]>
    composites: {}
  }

  type UserDailyActivityGetPayload<S extends boolean | null | undefined | UserDailyActivityDefaultArgs> = $Result.GetResult<Prisma.$UserDailyActivityPayload, S>

  type UserDailyActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDailyActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDailyActivityCountAggregateInputType | true
    }

  export interface UserDailyActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDailyActivity'], meta: { name: 'UserDailyActivity' } }
    /**
     * Find zero or one UserDailyActivity that matches the filter.
     * @param {UserDailyActivityFindUniqueArgs} args - Arguments to find a UserDailyActivity
     * @example
     * // Get one UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDailyActivityFindUniqueArgs>(args: SelectSubset<T, UserDailyActivityFindUniqueArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDailyActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDailyActivityFindUniqueOrThrowArgs} args - Arguments to find a UserDailyActivity
     * @example
     * // Get one UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDailyActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDailyActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDailyActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityFindFirstArgs} args - Arguments to find a UserDailyActivity
     * @example
     * // Get one UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDailyActivityFindFirstArgs>(args?: SelectSubset<T, UserDailyActivityFindFirstArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDailyActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityFindFirstOrThrowArgs} args - Arguments to find a UserDailyActivity
     * @example
     * // Get one UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDailyActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDailyActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDailyActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDailyActivities
     * const userDailyActivities = await prisma.userDailyActivity.findMany()
     * 
     * // Get first 10 UserDailyActivities
     * const userDailyActivities = await prisma.userDailyActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDailyActivityWithIdOnly = await prisma.userDailyActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDailyActivityFindManyArgs>(args?: SelectSubset<T, UserDailyActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDailyActivity.
     * @param {UserDailyActivityCreateArgs} args - Arguments to create a UserDailyActivity.
     * @example
     * // Create one UserDailyActivity
     * const UserDailyActivity = await prisma.userDailyActivity.create({
     *   data: {
     *     // ... data to create a UserDailyActivity
     *   }
     * })
     * 
     */
    create<T extends UserDailyActivityCreateArgs>(args: SelectSubset<T, UserDailyActivityCreateArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDailyActivities.
     * @param {UserDailyActivityCreateManyArgs} args - Arguments to create many UserDailyActivities.
     * @example
     * // Create many UserDailyActivities
     * const userDailyActivity = await prisma.userDailyActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDailyActivityCreateManyArgs>(args?: SelectSubset<T, UserDailyActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDailyActivities and returns the data saved in the database.
     * @param {UserDailyActivityCreateManyAndReturnArgs} args - Arguments to create many UserDailyActivities.
     * @example
     * // Create many UserDailyActivities
     * const userDailyActivity = await prisma.userDailyActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDailyActivities and only return the `id`
     * const userDailyActivityWithIdOnly = await prisma.userDailyActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDailyActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDailyActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDailyActivity.
     * @param {UserDailyActivityDeleteArgs} args - Arguments to delete one UserDailyActivity.
     * @example
     * // Delete one UserDailyActivity
     * const UserDailyActivity = await prisma.userDailyActivity.delete({
     *   where: {
     *     // ... filter to delete one UserDailyActivity
     *   }
     * })
     * 
     */
    delete<T extends UserDailyActivityDeleteArgs>(args: SelectSubset<T, UserDailyActivityDeleteArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDailyActivity.
     * @param {UserDailyActivityUpdateArgs} args - Arguments to update one UserDailyActivity.
     * @example
     * // Update one UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDailyActivityUpdateArgs>(args: SelectSubset<T, UserDailyActivityUpdateArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDailyActivities.
     * @param {UserDailyActivityDeleteManyArgs} args - Arguments to filter UserDailyActivities to delete.
     * @example
     * // Delete a few UserDailyActivities
     * const { count } = await prisma.userDailyActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDailyActivityDeleteManyArgs>(args?: SelectSubset<T, UserDailyActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDailyActivities
     * const userDailyActivity = await prisma.userDailyActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDailyActivityUpdateManyArgs>(args: SelectSubset<T, UserDailyActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDailyActivities and returns the data updated in the database.
     * @param {UserDailyActivityUpdateManyAndReturnArgs} args - Arguments to update many UserDailyActivities.
     * @example
     * // Update many UserDailyActivities
     * const userDailyActivity = await prisma.userDailyActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDailyActivities and only return the `id`
     * const userDailyActivityWithIdOnly = await prisma.userDailyActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDailyActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDailyActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDailyActivity.
     * @param {UserDailyActivityUpsertArgs} args - Arguments to update or create a UserDailyActivity.
     * @example
     * // Update or create a UserDailyActivity
     * const userDailyActivity = await prisma.userDailyActivity.upsert({
     *   create: {
     *     // ... data to create a UserDailyActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDailyActivity we want to update
     *   }
     * })
     */
    upsert<T extends UserDailyActivityUpsertArgs>(args: SelectSubset<T, UserDailyActivityUpsertArgs<ExtArgs>>): Prisma__UserDailyActivityClient<$Result.GetResult<Prisma.$UserDailyActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityCountArgs} args - Arguments to filter UserDailyActivities to count.
     * @example
     * // Count the number of UserDailyActivities
     * const count = await prisma.userDailyActivity.count({
     *   where: {
     *     // ... the filter for the UserDailyActivities we want to count
     *   }
     * })
    **/
    count<T extends UserDailyActivityCountArgs>(
      args?: Subset<T, UserDailyActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDailyActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDailyActivityAggregateArgs>(args: Subset<T, UserDailyActivityAggregateArgs>): Prisma.PrismaPromise<GetUserDailyActivityAggregateType<T>>

    /**
     * Group by UserDailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDailyActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDailyActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDailyActivityGroupByArgs['orderBy'] }
        : { orderBy?: UserDailyActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDailyActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDailyActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDailyActivity model
   */
  readonly fields: UserDailyActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDailyActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDailyActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDailyActivity model
   */
  interface UserDailyActivityFieldRefs {
    readonly id: FieldRef<"UserDailyActivity", 'String'>
    readonly userId: FieldRef<"UserDailyActivity", 'String'>
    readonly date: FieldRef<"UserDailyActivity", 'DateTime'>
    readonly createdAt: FieldRef<"UserDailyActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"UserDailyActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDailyActivity findUnique
   */
  export type UserDailyActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserDailyActivity to fetch.
     */
    where: UserDailyActivityWhereUniqueInput
  }

  /**
   * UserDailyActivity findUniqueOrThrow
   */
  export type UserDailyActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserDailyActivity to fetch.
     */
    where: UserDailyActivityWhereUniqueInput
  }

  /**
   * UserDailyActivity findFirst
   */
  export type UserDailyActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserDailyActivity to fetch.
     */
    where?: UserDailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDailyActivities to fetch.
     */
    orderBy?: UserDailyActivityOrderByWithRelationInput | UserDailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDailyActivities.
     */
    cursor?: UserDailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDailyActivities.
     */
    distinct?: UserDailyActivityScalarFieldEnum | UserDailyActivityScalarFieldEnum[]
  }

  /**
   * UserDailyActivity findFirstOrThrow
   */
  export type UserDailyActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserDailyActivity to fetch.
     */
    where?: UserDailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDailyActivities to fetch.
     */
    orderBy?: UserDailyActivityOrderByWithRelationInput | UserDailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDailyActivities.
     */
    cursor?: UserDailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDailyActivities.
     */
    distinct?: UserDailyActivityScalarFieldEnum | UserDailyActivityScalarFieldEnum[]
  }

  /**
   * UserDailyActivity findMany
   */
  export type UserDailyActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserDailyActivities to fetch.
     */
    where?: UserDailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDailyActivities to fetch.
     */
    orderBy?: UserDailyActivityOrderByWithRelationInput | UserDailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDailyActivities.
     */
    cursor?: UserDailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDailyActivities.
     */
    skip?: number
    distinct?: UserDailyActivityScalarFieldEnum | UserDailyActivityScalarFieldEnum[]
  }

  /**
   * UserDailyActivity create
   */
  export type UserDailyActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDailyActivity.
     */
    data: XOR<UserDailyActivityCreateInput, UserDailyActivityUncheckedCreateInput>
  }

  /**
   * UserDailyActivity createMany
   */
  export type UserDailyActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDailyActivities.
     */
    data: UserDailyActivityCreateManyInput | UserDailyActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDailyActivity createManyAndReturn
   */
  export type UserDailyActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * The data used to create many UserDailyActivities.
     */
    data: UserDailyActivityCreateManyInput | UserDailyActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDailyActivity update
   */
  export type UserDailyActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDailyActivity.
     */
    data: XOR<UserDailyActivityUpdateInput, UserDailyActivityUncheckedUpdateInput>
    /**
     * Choose, which UserDailyActivity to update.
     */
    where: UserDailyActivityWhereUniqueInput
  }

  /**
   * UserDailyActivity updateMany
   */
  export type UserDailyActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDailyActivities.
     */
    data: XOR<UserDailyActivityUpdateManyMutationInput, UserDailyActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserDailyActivities to update
     */
    where?: UserDailyActivityWhereInput
    /**
     * Limit how many UserDailyActivities to update.
     */
    limit?: number
  }

  /**
   * UserDailyActivity updateManyAndReturn
   */
  export type UserDailyActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * The data used to update UserDailyActivities.
     */
    data: XOR<UserDailyActivityUpdateManyMutationInput, UserDailyActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserDailyActivities to update
     */
    where?: UserDailyActivityWhereInput
    /**
     * Limit how many UserDailyActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDailyActivity upsert
   */
  export type UserDailyActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDailyActivity to update in case it exists.
     */
    where: UserDailyActivityWhereUniqueInput
    /**
     * In case the UserDailyActivity found by the `where` argument doesn't exist, create a new UserDailyActivity with this data.
     */
    create: XOR<UserDailyActivityCreateInput, UserDailyActivityUncheckedCreateInput>
    /**
     * In case the UserDailyActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDailyActivityUpdateInput, UserDailyActivityUncheckedUpdateInput>
  }

  /**
   * UserDailyActivity delete
   */
  export type UserDailyActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
    /**
     * Filter which UserDailyActivity to delete.
     */
    where: UserDailyActivityWhereUniqueInput
  }

  /**
   * UserDailyActivity deleteMany
   */
  export type UserDailyActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDailyActivities to delete
     */
    where?: UserDailyActivityWhereInput
    /**
     * Limit how many UserDailyActivities to delete.
     */
    limit?: number
  }

  /**
   * UserDailyActivity without action
   */
  export type UserDailyActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDailyActivity
     */
    select?: UserDailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDailyActivity
     */
    omit?: UserDailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDailyActivityInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorials: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorials: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    companies: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorials: number
    testcases: number
    codeSnippets: number
    referenceSolutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorials?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorials?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    companies?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorials?: true
    testcases?: true
    codeSnippets?: true
    referenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    companies: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorials: string | null
    testcases: JsonValue
    codeSnippets: JsonValue
    referenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    companies?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorials?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemsPlaylists?: boolean | Problem$problemsPlaylistsArgs<ExtArgs>
    contestProblems?: boolean | Problem$contestProblemsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    companies?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorials?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    companies?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorials?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    companies?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorials?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "companies" | "userId" | "examples" | "constraints" | "hints" | "editorials" | "testcases" | "codeSnippets" | "referenceSolutions" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemsPlaylists?: boolean | Problem$problemsPlaylistsArgs<ExtArgs>
    contestProblems?: boolean | Problem$contestProblemsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedBy: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      problemsPlaylists: Prisma.$ProblemsInPlaylistPayload<ExtArgs>[]
      contestProblems: Prisma.$ContestProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      companies: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorials: string | null
      testcases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends Problem$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemsPlaylists<T extends Problem$problemsPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemsPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestProblems<T extends Problem$contestProblemsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$contestProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly companies: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorials: FieldRef<"Problem", 'String'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submission
   */
  export type Problem$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem.problemsPlaylists
   */
  export type Problem$problemsPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    where?: ProblemsInPlaylistWhereInput
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemsInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemsInPlaylistScalarFieldEnum | ProblemsInPlaylistScalarFieldEnum[]
  }

  /**
   * Problem.contestProblems
   */
  export type Problem$contestProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    where?: ContestProblemWhereInput
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    cursor?: ContestProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestProblemScalarFieldEnum | ContestProblemScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    contestSubmission?: boolean | Submission$contestSubmissionArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    contestSubmission?: boolean | Submission$contestSubmissionArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      testCases: Prisma.$TestCaseResultPayload<ExtArgs>[]
      contestSubmission: Prisma.$ContestSubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testCases<T extends Submission$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestSubmission<T extends Submission$contestSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Submission$contestSubmissionArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'Json'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.testCases
   */
  export type Submission$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    cursor?: TestCaseResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * Submission.contestSubmission
   */
  export type Submission$contestSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    where?: ContestSubmissionWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestCaseResult
   */

  export type AggregateTestCaseResult = {
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  export type TestCaseResultAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TestCaseResultSumAggregateOutputType = {
    testCase: number | null
  }

  export type TestCaseResultMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCaseResultMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCaseResultCountAggregateOutputType = {
    id: number
    submissionId: number
    testCase: number
    passed: number
    stdout: number
    expected: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestCaseResultAvgAggregateInputType = {
    testCase?: true
  }

  export type TestCaseResultSumAggregateInputType = {
    testCase?: true
  }

  export type TestCaseResultMinAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCaseResultMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCaseResultCountAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestCaseResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResult to aggregate.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCaseResults
    **/
    _count?: true | TestCaseResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type GetTestCaseResultAggregateType<T extends TestCaseResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCaseResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCaseResult[P]>
      : GetScalarType<T[P], AggregateTestCaseResult[P]>
  }




  export type TestCaseResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithAggregationInput | TestCaseResultOrderByWithAggregationInput[]
    by: TestCaseResultScalarFieldEnum[] | TestCaseResultScalarFieldEnum
    having?: TestCaseResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseResultCountAggregateInputType | true
    _avg?: TestCaseResultAvgAggregateInputType
    _sum?: TestCaseResultSumAggregateInputType
    _min?: TestCaseResultMinAggregateInputType
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type TestCaseResultGroupByOutputType = {
    id: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string | null
    expected: string
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  type GetTestCaseResultGroupByPayload<T extends TestCaseResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestCaseResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "testCase" | "passed" | "stdout" | "expected" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["testCaseResult"]>
  export type TestCaseResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $TestCaseResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCaseResult"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testCase: number
      passed: boolean
      stdout: string | null
      expected: string
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testCaseResult"]>
    composites: {}
  }

  type TestCaseResultGetPayload<S extends boolean | null | undefined | TestCaseResultDefaultArgs> = $Result.GetResult<Prisma.$TestCaseResultPayload, S>

  type TestCaseResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseResultCountAggregateInputType | true
    }

  export interface TestCaseResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCaseResult'], meta: { name: 'TestCaseResult' } }
    /**
     * Find zero or one TestCaseResult that matches the filter.
     * @param {TestCaseResultFindUniqueArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseResultFindUniqueArgs>(args: SelectSubset<T, TestCaseResultFindUniqueArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCaseResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseResultFindUniqueOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseResultFindFirstArgs>(args?: SelectSubset<T, TestCaseResultFindFirstArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCaseResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany()
     * 
     * // Get first 10 TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseResultFindManyArgs>(args?: SelectSubset<T, TestCaseResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCaseResult.
     * @param {TestCaseResultCreateArgs} args - Arguments to create a TestCaseResult.
     * @example
     * // Create one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.create({
     *   data: {
     *     // ... data to create a TestCaseResult
     *   }
     * })
     * 
     */
    create<T extends TestCaseResultCreateArgs>(args: SelectSubset<T, TestCaseResultCreateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCaseResults.
     * @param {TestCaseResultCreateManyArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseResultCreateManyArgs>(args?: SelectSubset<T, TestCaseResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCaseResults and returns the data saved in the database.
     * @param {TestCaseResultCreateManyAndReturnArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCaseResult.
     * @param {TestCaseResultDeleteArgs} args - Arguments to delete one TestCaseResult.
     * @example
     * // Delete one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.delete({
     *   where: {
     *     // ... filter to delete one TestCaseResult
     *   }
     * })
     * 
     */
    delete<T extends TestCaseResultDeleteArgs>(args: SelectSubset<T, TestCaseResultDeleteArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCaseResult.
     * @param {TestCaseResultUpdateArgs} args - Arguments to update one TestCaseResult.
     * @example
     * // Update one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseResultUpdateArgs>(args: SelectSubset<T, TestCaseResultUpdateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCaseResults.
     * @param {TestCaseResultDeleteManyArgs} args - Arguments to filter TestCaseResults to delete.
     * @example
     * // Delete a few TestCaseResults
     * const { count } = await prisma.testCaseResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseResultDeleteManyArgs>(args?: SelectSubset<T, TestCaseResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseResultUpdateManyArgs>(args: SelectSubset<T, TestCaseResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults and returns the data updated in the database.
     * @param {TestCaseResultUpdateManyAndReturnArgs} args - Arguments to update many TestCaseResults.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCaseResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCaseResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCaseResult.
     * @param {TestCaseResultUpsertArgs} args - Arguments to update or create a TestCaseResult.
     * @example
     * // Update or create a TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.upsert({
     *   create: {
     *     // ... data to create a TestCaseResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCaseResult we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseResultUpsertArgs>(args: SelectSubset<T, TestCaseResultUpsertArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultCountArgs} args - Arguments to filter TestCaseResults to count.
     * @example
     * // Count the number of TestCaseResults
     * const count = await prisma.testCaseResult.count({
     *   where: {
     *     // ... the filter for the TestCaseResults we want to count
     *   }
     * })
    **/
    count<T extends TestCaseResultCountArgs>(
      args?: Subset<T, TestCaseResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestCaseResultAggregateArgs>(args: Subset<T, TestCaseResultAggregateArgs>): Prisma.PrismaPromise<GetTestCaseResultAggregateType<T>>

    /**
     * Group by TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestCaseResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseResultGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestCaseResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCaseResult model
   */
  readonly fields: TestCaseResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCaseResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestCaseResult model
   */
  interface TestCaseResultFieldRefs {
    readonly id: FieldRef<"TestCaseResult", 'String'>
    readonly submissionId: FieldRef<"TestCaseResult", 'String'>
    readonly testCase: FieldRef<"TestCaseResult", 'Int'>
    readonly passed: FieldRef<"TestCaseResult", 'Boolean'>
    readonly stdout: FieldRef<"TestCaseResult", 'String'>
    readonly expected: FieldRef<"TestCaseResult", 'String'>
    readonly stderr: FieldRef<"TestCaseResult", 'String'>
    readonly compileOutput: FieldRef<"TestCaseResult", 'String'>
    readonly status: FieldRef<"TestCaseResult", 'String'>
    readonly memory: FieldRef<"TestCaseResult", 'String'>
    readonly time: FieldRef<"TestCaseResult", 'String'>
    readonly createdAt: FieldRef<"TestCaseResult", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCaseResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCaseResult findUnique
   */
  export type TestCaseResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findUniqueOrThrow
   */
  export type TestCaseResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findFirst
   */
  export type TestCaseResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findFirstOrThrow
   */
  export type TestCaseResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findMany
   */
  export type TestCaseResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResults to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult create
   */
  export type TestCaseResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCaseResult.
     */
    data: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
  }

  /**
   * TestCaseResult createMany
   */
  export type TestCaseResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCaseResult createManyAndReturn
   */
  export type TestCaseResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult update
   */
  export type TestCaseResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCaseResult.
     */
    data: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
    /**
     * Choose, which TestCaseResult to update.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult updateMany
   */
  export type TestCaseResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
  }

  /**
   * TestCaseResult updateManyAndReturn
   */
  export type TestCaseResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult upsert
   */
  export type TestCaseResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCaseResult to update in case it exists.
     */
    where: TestCaseResultWhereUniqueInput
    /**
     * In case the TestCaseResult found by the `where` argument doesn't exist, create a new TestCaseResult with this data.
     */
    create: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
    /**
     * In case the TestCaseResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
  }

  /**
   * TestCaseResult delete
   */
  export type TestCaseResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter which TestCaseResult to delete.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult deleteMany
   */
  export type TestCaseResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResults to delete
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to delete.
     */
    limit?: number
  }

  /**
   * TestCaseResult without action
   */
  export type TestCaseResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
  }


  /**
   * Model ProblemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolved to aggregate.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type ProblemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithAggregationInput | ProblemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: ProblemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends ProblemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemSolved"]>
  export type ProblemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type ProblemSolvedGetPayload<S extends boolean | null | undefined | ProblemSolvedDefaultArgs> = $Result.GetResult<Prisma.$ProblemSolvedPayload, S>

  type ProblemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface ProblemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemSolved'], meta: { name: 'ProblemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {ProblemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemSolvedFindUniqueArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemSolvedFindFirstArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemSolvedFindManyArgs>(args?: SelectSubset<T, ProblemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {ProblemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends ProblemSolvedCreateArgs>(args: SelectSubset<T, ProblemSolvedCreateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {ProblemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemSolvedCreateManyArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {ProblemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {ProblemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends ProblemSolvedDeleteArgs>(args: SelectSubset<T, ProblemSolvedDeleteArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {ProblemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemSolvedUpdateArgs>(args: SelectSubset<T, ProblemSolvedUpdateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {ProblemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemSolvedDeleteManyArgs>(args?: SelectSubset<T, ProblemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemSolvedUpdateManyArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {ProblemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {ProblemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends ProblemSolvedUpsertArgs>(args: SelectSubset<T, ProblemSolvedUpsertArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends ProblemSolvedCountArgs>(
      args?: Subset<T, ProblemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: ProblemSolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemSolved model
   */
  readonly fields: ProblemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemSolved model
   */
  interface ProblemSolvedFieldRefs {
    readonly id: FieldRef<"ProblemSolved", 'String'>
    readonly userId: FieldRef<"ProblemSolved", 'String'>
    readonly problemId: FieldRef<"ProblemSolved", 'String'>
    readonly createdAt: FieldRef<"ProblemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemSolved findUnique
   */
  export type ProblemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findUniqueOrThrow
   */
  export type ProblemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findFirst
   */
  export type ProblemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findFirstOrThrow
   */
  export type ProblemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findMany
   */
  export type ProblemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolveds to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved create
   */
  export type ProblemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemSolved.
     */
    data: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
  }

  /**
   * ProblemSolved createMany
   */
  export type ProblemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemSolved createManyAndReturn
   */
  export type ProblemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved update
   */
  export type ProblemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemSolved.
     */
    data: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
    /**
     * Choose, which ProblemSolved to update.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved updateMany
   */
  export type ProblemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
  }

  /**
   * ProblemSolved updateManyAndReturn
   */
  export type ProblemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved upsert
   */
  export type ProblemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemSolved to update in case it exists.
     */
    where: ProblemSolvedWhereUniqueInput
    /**
     * In case the ProblemSolved found by the `where` argument doesn't exist, create a new ProblemSolved with this data.
     */
    create: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
    /**
     * In case the ProblemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
  }

  /**
   * ProblemSolved delete
   */
  export type ProblemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter which ProblemSolved to delete.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved deleteMany
   */
  export type ProblemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolveds to delete
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to delete.
     */
    limit?: number
  }

  /**
   * ProblemSolved without action
   */
  export type ProblemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    isPublic: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    isPublic: boolean
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt" | "isPublic", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      problems: Prisma.$ProblemsInPlaylistPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
      isPublic: boolean
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Playlist$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
    readonly isPublic: FieldRef<"Playlist", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.problems
   */
  export type Playlist$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    where?: ProblemsInPlaylistWhereInput
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemsInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemsInPlaylistScalarFieldEnum | ProblemsInPlaylistScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model ProblemsInPlaylist
   */

  export type AggregateProblemsInPlaylist = {
    _count: ProblemsInPlaylistCountAggregateOutputType | null
    _min: ProblemsInPlaylistMinAggregateOutputType | null
    _max: ProblemsInPlaylistMaxAggregateOutputType | null
  }

  export type ProblemsInPlaylistMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemsInPlaylistMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemsInPlaylistCountAggregateOutputType = {
    id: number
    playlistId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemsInPlaylistMinAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemsInPlaylistMaxAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemsInPlaylistCountAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemsInPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemsInPlaylist to aggregate.
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsInPlaylists to fetch.
     */
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemsInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemsInPlaylists
    **/
    _count?: true | ProblemsInPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemsInPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemsInPlaylistMaxAggregateInputType
  }

  export type GetProblemsInPlaylistAggregateType<T extends ProblemsInPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemsInPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemsInPlaylist[P]>
      : GetScalarType<T[P], AggregateProblemsInPlaylist[P]>
  }




  export type ProblemsInPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsInPlaylistWhereInput
    orderBy?: ProblemsInPlaylistOrderByWithAggregationInput | ProblemsInPlaylistOrderByWithAggregationInput[]
    by: ProblemsInPlaylistScalarFieldEnum[] | ProblemsInPlaylistScalarFieldEnum
    having?: ProblemsInPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemsInPlaylistCountAggregateInputType | true
    _min?: ProblemsInPlaylistMinAggregateInputType
    _max?: ProblemsInPlaylistMaxAggregateInputType
  }

  export type ProblemsInPlaylistGroupByOutputType = {
    id: string
    playlistId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemsInPlaylistCountAggregateOutputType | null
    _min: ProblemsInPlaylistMinAggregateOutputType | null
    _max: ProblemsInPlaylistMaxAggregateOutputType | null
  }

  type GetProblemsInPlaylistGroupByPayload<T extends ProblemsInPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemsInPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemsInPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemsInPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemsInPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type ProblemsInPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsInPlaylist"]>

  export type ProblemsInPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsInPlaylist"]>

  export type ProblemsInPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsInPlaylist"]>

  export type ProblemsInPlaylistSelectScalar = {
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemsInPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemsInPlaylist"]>
  export type ProblemsInPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemsInPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemsInPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemsInPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemsInPlaylist"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemsInPlaylist"]>
    composites: {}
  }

  type ProblemsInPlaylistGetPayload<S extends boolean | null | undefined | ProblemsInPlaylistDefaultArgs> = $Result.GetResult<Prisma.$ProblemsInPlaylistPayload, S>

  type ProblemsInPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemsInPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemsInPlaylistCountAggregateInputType | true
    }

  export interface ProblemsInPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemsInPlaylist'], meta: { name: 'ProblemsInPlaylist' } }
    /**
     * Find zero or one ProblemsInPlaylist that matches the filter.
     * @param {ProblemsInPlaylistFindUniqueArgs} args - Arguments to find a ProblemsInPlaylist
     * @example
     * // Get one ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemsInPlaylistFindUniqueArgs>(args: SelectSubset<T, ProblemsInPlaylistFindUniqueArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemsInPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemsInPlaylistFindUniqueOrThrowArgs} args - Arguments to find a ProblemsInPlaylist
     * @example
     * // Get one ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemsInPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemsInPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemsInPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistFindFirstArgs} args - Arguments to find a ProblemsInPlaylist
     * @example
     * // Get one ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemsInPlaylistFindFirstArgs>(args?: SelectSubset<T, ProblemsInPlaylistFindFirstArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemsInPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistFindFirstOrThrowArgs} args - Arguments to find a ProblemsInPlaylist
     * @example
     * // Get one ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemsInPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemsInPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemsInPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemsInPlaylists
     * const problemsInPlaylists = await prisma.problemsInPlaylist.findMany()
     * 
     * // Get first 10 ProblemsInPlaylists
     * const problemsInPlaylists = await prisma.problemsInPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemsInPlaylistWithIdOnly = await prisma.problemsInPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemsInPlaylistFindManyArgs>(args?: SelectSubset<T, ProblemsInPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemsInPlaylist.
     * @param {ProblemsInPlaylistCreateArgs} args - Arguments to create a ProblemsInPlaylist.
     * @example
     * // Create one ProblemsInPlaylist
     * const ProblemsInPlaylist = await prisma.problemsInPlaylist.create({
     *   data: {
     *     // ... data to create a ProblemsInPlaylist
     *   }
     * })
     * 
     */
    create<T extends ProblemsInPlaylistCreateArgs>(args: SelectSubset<T, ProblemsInPlaylistCreateArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemsInPlaylists.
     * @param {ProblemsInPlaylistCreateManyArgs} args - Arguments to create many ProblemsInPlaylists.
     * @example
     * // Create many ProblemsInPlaylists
     * const problemsInPlaylist = await prisma.problemsInPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemsInPlaylistCreateManyArgs>(args?: SelectSubset<T, ProblemsInPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemsInPlaylists and returns the data saved in the database.
     * @param {ProblemsInPlaylistCreateManyAndReturnArgs} args - Arguments to create many ProblemsInPlaylists.
     * @example
     * // Create many ProblemsInPlaylists
     * const problemsInPlaylist = await prisma.problemsInPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemsInPlaylists and only return the `id`
     * const problemsInPlaylistWithIdOnly = await prisma.problemsInPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemsInPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemsInPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemsInPlaylist.
     * @param {ProblemsInPlaylistDeleteArgs} args - Arguments to delete one ProblemsInPlaylist.
     * @example
     * // Delete one ProblemsInPlaylist
     * const ProblemsInPlaylist = await prisma.problemsInPlaylist.delete({
     *   where: {
     *     // ... filter to delete one ProblemsInPlaylist
     *   }
     * })
     * 
     */
    delete<T extends ProblemsInPlaylistDeleteArgs>(args: SelectSubset<T, ProblemsInPlaylistDeleteArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemsInPlaylist.
     * @param {ProblemsInPlaylistUpdateArgs} args - Arguments to update one ProblemsInPlaylist.
     * @example
     * // Update one ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemsInPlaylistUpdateArgs>(args: SelectSubset<T, ProblemsInPlaylistUpdateArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemsInPlaylists.
     * @param {ProblemsInPlaylistDeleteManyArgs} args - Arguments to filter ProblemsInPlaylists to delete.
     * @example
     * // Delete a few ProblemsInPlaylists
     * const { count } = await prisma.problemsInPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemsInPlaylistDeleteManyArgs>(args?: SelectSubset<T, ProblemsInPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemsInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemsInPlaylists
     * const problemsInPlaylist = await prisma.problemsInPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemsInPlaylistUpdateManyArgs>(args: SelectSubset<T, ProblemsInPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemsInPlaylists and returns the data updated in the database.
     * @param {ProblemsInPlaylistUpdateManyAndReturnArgs} args - Arguments to update many ProblemsInPlaylists.
     * @example
     * // Update many ProblemsInPlaylists
     * const problemsInPlaylist = await prisma.problemsInPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemsInPlaylists and only return the `id`
     * const problemsInPlaylistWithIdOnly = await prisma.problemsInPlaylist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemsInPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemsInPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemsInPlaylist.
     * @param {ProblemsInPlaylistUpsertArgs} args - Arguments to update or create a ProblemsInPlaylist.
     * @example
     * // Update or create a ProblemsInPlaylist
     * const problemsInPlaylist = await prisma.problemsInPlaylist.upsert({
     *   create: {
     *     // ... data to create a ProblemsInPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemsInPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends ProblemsInPlaylistUpsertArgs>(args: SelectSubset<T, ProblemsInPlaylistUpsertArgs<ExtArgs>>): Prisma__ProblemsInPlaylistClient<$Result.GetResult<Prisma.$ProblemsInPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemsInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistCountArgs} args - Arguments to filter ProblemsInPlaylists to count.
     * @example
     * // Count the number of ProblemsInPlaylists
     * const count = await prisma.problemsInPlaylist.count({
     *   where: {
     *     // ... the filter for the ProblemsInPlaylists we want to count
     *   }
     * })
    **/
    count<T extends ProblemsInPlaylistCountArgs>(
      args?: Subset<T, ProblemsInPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemsInPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemsInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemsInPlaylistAggregateArgs>(args: Subset<T, ProblemsInPlaylistAggregateArgs>): Prisma.PrismaPromise<GetProblemsInPlaylistAggregateType<T>>

    /**
     * Group by ProblemsInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsInPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemsInPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemsInPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: ProblemsInPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemsInPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemsInPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemsInPlaylist model
   */
  readonly fields: ProblemsInPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemsInPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemsInPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemsInPlaylist model
   */
  interface ProblemsInPlaylistFieldRefs {
    readonly id: FieldRef<"ProblemsInPlaylist", 'String'>
    readonly playlistId: FieldRef<"ProblemsInPlaylist", 'String'>
    readonly problemId: FieldRef<"ProblemsInPlaylist", 'String'>
    readonly createdAt: FieldRef<"ProblemsInPlaylist", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemsInPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemsInPlaylist findUnique
   */
  export type ProblemsInPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsInPlaylist to fetch.
     */
    where: ProblemsInPlaylistWhereUniqueInput
  }

  /**
   * ProblemsInPlaylist findUniqueOrThrow
   */
  export type ProblemsInPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsInPlaylist to fetch.
     */
    where: ProblemsInPlaylistWhereUniqueInput
  }

  /**
   * ProblemsInPlaylist findFirst
   */
  export type ProblemsInPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsInPlaylist to fetch.
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsInPlaylists to fetch.
     */
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemsInPlaylists.
     */
    cursor?: ProblemsInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemsInPlaylists.
     */
    distinct?: ProblemsInPlaylistScalarFieldEnum | ProblemsInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemsInPlaylist findFirstOrThrow
   */
  export type ProblemsInPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsInPlaylist to fetch.
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsInPlaylists to fetch.
     */
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemsInPlaylists.
     */
    cursor?: ProblemsInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemsInPlaylists.
     */
    distinct?: ProblemsInPlaylistScalarFieldEnum | ProblemsInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemsInPlaylist findMany
   */
  export type ProblemsInPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsInPlaylists to fetch.
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsInPlaylists to fetch.
     */
    orderBy?: ProblemsInPlaylistOrderByWithRelationInput | ProblemsInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemsInPlaylists.
     */
    cursor?: ProblemsInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsInPlaylists.
     */
    skip?: number
    distinct?: ProblemsInPlaylistScalarFieldEnum | ProblemsInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemsInPlaylist create
   */
  export type ProblemsInPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemsInPlaylist.
     */
    data: XOR<ProblemsInPlaylistCreateInput, ProblemsInPlaylistUncheckedCreateInput>
  }

  /**
   * ProblemsInPlaylist createMany
   */
  export type ProblemsInPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemsInPlaylists.
     */
    data: ProblemsInPlaylistCreateManyInput | ProblemsInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemsInPlaylist createManyAndReturn
   */
  export type ProblemsInPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemsInPlaylists.
     */
    data: ProblemsInPlaylistCreateManyInput | ProblemsInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemsInPlaylist update
   */
  export type ProblemsInPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemsInPlaylist.
     */
    data: XOR<ProblemsInPlaylistUpdateInput, ProblemsInPlaylistUncheckedUpdateInput>
    /**
     * Choose, which ProblemsInPlaylist to update.
     */
    where: ProblemsInPlaylistWhereUniqueInput
  }

  /**
   * ProblemsInPlaylist updateMany
   */
  export type ProblemsInPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemsInPlaylists.
     */
    data: XOR<ProblemsInPlaylistUpdateManyMutationInput, ProblemsInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemsInPlaylists to update
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * Limit how many ProblemsInPlaylists to update.
     */
    limit?: number
  }

  /**
   * ProblemsInPlaylist updateManyAndReturn
   */
  export type ProblemsInPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update ProblemsInPlaylists.
     */
    data: XOR<ProblemsInPlaylistUpdateManyMutationInput, ProblemsInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemsInPlaylists to update
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * Limit how many ProblemsInPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemsInPlaylist upsert
   */
  export type ProblemsInPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemsInPlaylist to update in case it exists.
     */
    where: ProblemsInPlaylistWhereUniqueInput
    /**
     * In case the ProblemsInPlaylist found by the `where` argument doesn't exist, create a new ProblemsInPlaylist with this data.
     */
    create: XOR<ProblemsInPlaylistCreateInput, ProblemsInPlaylistUncheckedCreateInput>
    /**
     * In case the ProblemsInPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemsInPlaylistUpdateInput, ProblemsInPlaylistUncheckedUpdateInput>
  }

  /**
   * ProblemsInPlaylist delete
   */
  export type ProblemsInPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
    /**
     * Filter which ProblemsInPlaylist to delete.
     */
    where: ProblemsInPlaylistWhereUniqueInput
  }

  /**
   * ProblemsInPlaylist deleteMany
   */
  export type ProblemsInPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemsInPlaylists to delete
     */
    where?: ProblemsInPlaylistWhereInput
    /**
     * Limit how many ProblemsInPlaylists to delete.
     */
    limit?: number
  }

  /**
   * ProblemsInPlaylist without action
   */
  export type ProblemsInPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsInPlaylist
     */
    select?: ProblemsInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsInPlaylist
     */
    omit?: ProblemsInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsInPlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Contest
   */

  export type AggregateContest = {
    _count: ContestCountAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  export type ContestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    createdBy: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ContestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ContestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contest to aggregate.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contests
    **/
    _count?: true | ContestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestMaxAggregateInputType
  }

  export type GetContestAggregateType<T extends ContestAggregateArgs> = {
        [P in keyof T & keyof AggregateContest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContest[P]>
      : GetScalarType<T[P], AggregateContest[P]>
  }




  export type ContestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithAggregationInput | ContestOrderByWithAggregationInput[]
    by: ContestScalarFieldEnum[] | ContestScalarFieldEnum
    having?: ContestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestCountAggregateInputType | true
    _min?: ContestMinAggregateInputType
    _max?: ContestMaxAggregateInputType
  }

  export type ContestGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    createdBy: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: ContestCountAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  type GetContestGroupByPayload<T extends ContestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestGroupByOutputType[P]>
            : GetScalarType<T[P], ContestGroupByOutputType[P]>
        }
      >
    >


  export type ContestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Contest$problemsArgs<ExtArgs>
    registrations?: boolean | Contest$registrationsArgs<ExtArgs>
    contestSubmissions?: boolean | Contest$contestSubmissionsArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ContestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "createdBy" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["contest"]>
  export type ContestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Contest$problemsArgs<ExtArgs>
    registrations?: boolean | Contest$registrationsArgs<ExtArgs>
    contestSubmissions?: boolean | Contest$contestSubmissionsArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
  }
  export type ContestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | Contest$UserArgs<ExtArgs>
  }

  export type $ContestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contest"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      problems: Prisma.$ContestProblemPayload<ExtArgs>[]
      registrations: Prisma.$ContestRegistrationPayload<ExtArgs>[]
      contestSubmissions: Prisma.$ContestSubmissionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      createdBy: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["contest"]>
    composites: {}
  }

  type ContestGetPayload<S extends boolean | null | undefined | ContestDefaultArgs> = $Result.GetResult<Prisma.$ContestPayload, S>

  type ContestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestCountAggregateInputType | true
    }

  export interface ContestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contest'], meta: { name: 'Contest' } }
    /**
     * Find zero or one Contest that matches the filter.
     * @param {ContestFindUniqueArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestFindUniqueArgs>(args: SelectSubset<T, ContestFindUniqueArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestFindUniqueOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestFindFirstArgs>(args?: SelectSubset<T, ContestFindFirstArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contest.findMany()
     * 
     * // Get first 10 Contests
     * const contests = await prisma.contest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestWithIdOnly = await prisma.contest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestFindManyArgs>(args?: SelectSubset<T, ContestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contest.
     * @param {ContestCreateArgs} args - Arguments to create a Contest.
     * @example
     * // Create one Contest
     * const Contest = await prisma.contest.create({
     *   data: {
     *     // ... data to create a Contest
     *   }
     * })
     * 
     */
    create<T extends ContestCreateArgs>(args: SelectSubset<T, ContestCreateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contests.
     * @param {ContestCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestCreateManyArgs>(args?: SelectSubset<T, ContestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contests and returns the data saved in the database.
     * @param {ContestCreateManyAndReturnArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contest.
     * @param {ContestDeleteArgs} args - Arguments to delete one Contest.
     * @example
     * // Delete one Contest
     * const Contest = await prisma.contest.delete({
     *   where: {
     *     // ... filter to delete one Contest
     *   }
     * })
     * 
     */
    delete<T extends ContestDeleteArgs>(args: SelectSubset<T, ContestDeleteArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contest.
     * @param {ContestUpdateArgs} args - Arguments to update one Contest.
     * @example
     * // Update one Contest
     * const contest = await prisma.contest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestUpdateArgs>(args: SelectSubset<T, ContestUpdateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contests.
     * @param {ContestDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestDeleteManyArgs>(args?: SelectSubset<T, ContestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestUpdateManyArgs>(args: SelectSubset<T, ContestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests and returns the data updated in the database.
     * @param {ContestUpdateManyAndReturnArgs} args - Arguments to update many Contests.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contest.
     * @param {ContestUpsertArgs} args - Arguments to update or create a Contest.
     * @example
     * // Update or create a Contest
     * const contest = await prisma.contest.upsert({
     *   create: {
     *     // ... data to create a Contest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contest we want to update
     *   }
     * })
     */
    upsert<T extends ContestUpsertArgs>(args: SelectSubset<T, ContestUpsertArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contest.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends ContestCountArgs>(
      args?: Subset<T, ContestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestAggregateArgs>(args: Subset<T, ContestAggregateArgs>): Prisma.PrismaPromise<GetContestAggregateType<T>>

    /**
     * Group by Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestGroupByArgs['orderBy'] }
        : { orderBy?: ContestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contest model
   */
  readonly fields: ContestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problems<T extends Contest$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Contest$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends Contest$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Contest$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestSubmissions<T extends Contest$contestSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Contest$contestSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Contest$UserArgs<ExtArgs> = {}>(args?: Subset<T, Contest$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contest model
   */
  interface ContestFieldRefs {
    readonly id: FieldRef<"Contest", 'String'>
    readonly title: FieldRef<"Contest", 'String'>
    readonly description: FieldRef<"Contest", 'String'>
    readonly startTime: FieldRef<"Contest", 'DateTime'>
    readonly endTime: FieldRef<"Contest", 'DateTime'>
    readonly createdBy: FieldRef<"Contest", 'String'>
    readonly createdAt: FieldRef<"Contest", 'DateTime'>
    readonly updatedAt: FieldRef<"Contest", 'DateTime'>
    readonly userId: FieldRef<"Contest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contest findUnique
   */
  export type ContestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findUniqueOrThrow
   */
  export type ContestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findFirst
   */
  export type ContestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findFirstOrThrow
   */
  export type ContestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findMany
   */
  export type ContestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contests to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest create
   */
  export type ContestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to create a Contest.
     */
    data: XOR<ContestCreateInput, ContestUncheckedCreateInput>
  }

  /**
   * Contest createMany
   */
  export type ContestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contest createManyAndReturn
   */
  export type ContestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contest update
   */
  export type ContestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to update a Contest.
     */
    data: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
    /**
     * Choose, which Contest to update.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest updateMany
   */
  export type ContestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
  }

  /**
   * Contest updateManyAndReturn
   */
  export type ContestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contest upsert
   */
  export type ContestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The filter to search for the Contest to update in case it exists.
     */
    where: ContestWhereUniqueInput
    /**
     * In case the Contest found by the `where` argument doesn't exist, create a new Contest with this data.
     */
    create: XOR<ContestCreateInput, ContestUncheckedCreateInput>
    /**
     * In case the Contest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
  }

  /**
   * Contest delete
   */
  export type ContestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter which Contest to delete.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest deleteMany
   */
  export type ContestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contests to delete
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to delete.
     */
    limit?: number
  }

  /**
   * Contest.problems
   */
  export type Contest$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    where?: ContestProblemWhereInput
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    cursor?: ContestProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestProblemScalarFieldEnum | ContestProblemScalarFieldEnum[]
  }

  /**
   * Contest.registrations
   */
  export type Contest$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    where?: ContestRegistrationWhereInput
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    cursor?: ContestRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestRegistrationScalarFieldEnum | ContestRegistrationScalarFieldEnum[]
  }

  /**
   * Contest.contestSubmissions
   */
  export type Contest$contestSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    where?: ContestSubmissionWhereInput
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    cursor?: ContestSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestSubmissionScalarFieldEnum | ContestSubmissionScalarFieldEnum[]
  }

  /**
   * Contest.User
   */
  export type Contest$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Contest without action
   */
  export type ContestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
  }


  /**
   * Model ContestProblem
   */

  export type AggregateContestProblem = {
    _count: ContestProblemCountAggregateOutputType | null
    _min: ContestProblemMinAggregateOutputType | null
    _max: ContestProblemMaxAggregateOutputType | null
  }

  export type ContestProblemMinAggregateOutputType = {
    id: string | null
    contestId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContestProblemMaxAggregateOutputType = {
    id: string | null
    contestId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContestProblemCountAggregateOutputType = {
    id: number
    contestId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContestProblemMinAggregateInputType = {
    id?: true
    contestId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContestProblemMaxAggregateInputType = {
    id?: true
    contestId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContestProblemCountAggregateInputType = {
    id?: true
    contestId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContestProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestProblem to aggregate.
     */
    where?: ContestProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestProblems to fetch.
     */
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestProblems
    **/
    _count?: true | ContestProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestProblemMaxAggregateInputType
  }

  export type GetContestProblemAggregateType<T extends ContestProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateContestProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestProblem[P]>
      : GetScalarType<T[P], AggregateContestProblem[P]>
  }




  export type ContestProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestProblemWhereInput
    orderBy?: ContestProblemOrderByWithAggregationInput | ContestProblemOrderByWithAggregationInput[]
    by: ContestProblemScalarFieldEnum[] | ContestProblemScalarFieldEnum
    having?: ContestProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestProblemCountAggregateInputType | true
    _min?: ContestProblemMinAggregateInputType
    _max?: ContestProblemMaxAggregateInputType
  }

  export type ContestProblemGroupByOutputType = {
    id: string
    contestId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ContestProblemCountAggregateOutputType | null
    _min: ContestProblemMinAggregateOutputType | null
    _max: ContestProblemMaxAggregateOutputType | null
  }

  type GetContestProblemGroupByPayload<T extends ContestProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ContestProblemGroupByOutputType[P]>
        }
      >
    >


  export type ContestProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestProblem"]>

  export type ContestProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestProblem"]>

  export type ContestProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestProblem"]>

  export type ContestProblemSelectScalar = {
    id?: boolean
    contestId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContestProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["contestProblem"]>
  export type ContestProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ContestProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ContestProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ContestProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestProblem"
    objects: {
      contest: Prisma.$ContestPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contestId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contestProblem"]>
    composites: {}
  }

  type ContestProblemGetPayload<S extends boolean | null | undefined | ContestProblemDefaultArgs> = $Result.GetResult<Prisma.$ContestProblemPayload, S>

  type ContestProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestProblemCountAggregateInputType | true
    }

  export interface ContestProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestProblem'], meta: { name: 'ContestProblem' } }
    /**
     * Find zero or one ContestProblem that matches the filter.
     * @param {ContestProblemFindUniqueArgs} args - Arguments to find a ContestProblem
     * @example
     * // Get one ContestProblem
     * const contestProblem = await prisma.contestProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestProblemFindUniqueArgs>(args: SelectSubset<T, ContestProblemFindUniqueArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestProblemFindUniqueOrThrowArgs} args - Arguments to find a ContestProblem
     * @example
     * // Get one ContestProblem
     * const contestProblem = await prisma.contestProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemFindFirstArgs} args - Arguments to find a ContestProblem
     * @example
     * // Get one ContestProblem
     * const contestProblem = await prisma.contestProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestProblemFindFirstArgs>(args?: SelectSubset<T, ContestProblemFindFirstArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemFindFirstOrThrowArgs} args - Arguments to find a ContestProblem
     * @example
     * // Get one ContestProblem
     * const contestProblem = await prisma.contestProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestProblems
     * const contestProblems = await prisma.contestProblem.findMany()
     * 
     * // Get first 10 ContestProblems
     * const contestProblems = await prisma.contestProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestProblemWithIdOnly = await prisma.contestProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestProblemFindManyArgs>(args?: SelectSubset<T, ContestProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestProblem.
     * @param {ContestProblemCreateArgs} args - Arguments to create a ContestProblem.
     * @example
     * // Create one ContestProblem
     * const ContestProblem = await prisma.contestProblem.create({
     *   data: {
     *     // ... data to create a ContestProblem
     *   }
     * })
     * 
     */
    create<T extends ContestProblemCreateArgs>(args: SelectSubset<T, ContestProblemCreateArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestProblems.
     * @param {ContestProblemCreateManyArgs} args - Arguments to create many ContestProblems.
     * @example
     * // Create many ContestProblems
     * const contestProblem = await prisma.contestProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestProblemCreateManyArgs>(args?: SelectSubset<T, ContestProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContestProblems and returns the data saved in the database.
     * @param {ContestProblemCreateManyAndReturnArgs} args - Arguments to create many ContestProblems.
     * @example
     * // Create many ContestProblems
     * const contestProblem = await prisma.contestProblem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContestProblems and only return the `id`
     * const contestProblemWithIdOnly = await prisma.contestProblem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContestProblem.
     * @param {ContestProblemDeleteArgs} args - Arguments to delete one ContestProblem.
     * @example
     * // Delete one ContestProblem
     * const ContestProblem = await prisma.contestProblem.delete({
     *   where: {
     *     // ... filter to delete one ContestProblem
     *   }
     * })
     * 
     */
    delete<T extends ContestProblemDeleteArgs>(args: SelectSubset<T, ContestProblemDeleteArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestProblem.
     * @param {ContestProblemUpdateArgs} args - Arguments to update one ContestProblem.
     * @example
     * // Update one ContestProblem
     * const contestProblem = await prisma.contestProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestProblemUpdateArgs>(args: SelectSubset<T, ContestProblemUpdateArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestProblems.
     * @param {ContestProblemDeleteManyArgs} args - Arguments to filter ContestProblems to delete.
     * @example
     * // Delete a few ContestProblems
     * const { count } = await prisma.contestProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestProblemDeleteManyArgs>(args?: SelectSubset<T, ContestProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestProblems
     * const contestProblem = await prisma.contestProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestProblemUpdateManyArgs>(args: SelectSubset<T, ContestProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestProblems and returns the data updated in the database.
     * @param {ContestProblemUpdateManyAndReturnArgs} args - Arguments to update many ContestProblems.
     * @example
     * // Update many ContestProblems
     * const contestProblem = await prisma.contestProblem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContestProblems and only return the `id`
     * const contestProblemWithIdOnly = await prisma.contestProblem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContestProblem.
     * @param {ContestProblemUpsertArgs} args - Arguments to update or create a ContestProblem.
     * @example
     * // Update or create a ContestProblem
     * const contestProblem = await prisma.contestProblem.upsert({
     *   create: {
     *     // ... data to create a ContestProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestProblem we want to update
     *   }
     * })
     */
    upsert<T extends ContestProblemUpsertArgs>(args: SelectSubset<T, ContestProblemUpsertArgs<ExtArgs>>): Prisma__ContestProblemClient<$Result.GetResult<Prisma.$ContestProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemCountArgs} args - Arguments to filter ContestProblems to count.
     * @example
     * // Count the number of ContestProblems
     * const count = await prisma.contestProblem.count({
     *   where: {
     *     // ... the filter for the ContestProblems we want to count
     *   }
     * })
    **/
    count<T extends ContestProblemCountArgs>(
      args?: Subset<T, ContestProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestProblemAggregateArgs>(args: Subset<T, ContestProblemAggregateArgs>): Prisma.PrismaPromise<GetContestProblemAggregateType<T>>

    /**
     * Group by ContestProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestProblemGroupByArgs['orderBy'] }
        : { orderBy?: ContestProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestProblem model
   */
  readonly fields: ContestProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestProblem model
   */
  interface ContestProblemFieldRefs {
    readonly id: FieldRef<"ContestProblem", 'String'>
    readonly contestId: FieldRef<"ContestProblem", 'String'>
    readonly problemId: FieldRef<"ContestProblem", 'String'>
    readonly createdAt: FieldRef<"ContestProblem", 'DateTime'>
    readonly updatedAt: FieldRef<"ContestProblem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContestProblem findUnique
   */
  export type ContestProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter, which ContestProblem to fetch.
     */
    where: ContestProblemWhereUniqueInput
  }

  /**
   * ContestProblem findUniqueOrThrow
   */
  export type ContestProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter, which ContestProblem to fetch.
     */
    where: ContestProblemWhereUniqueInput
  }

  /**
   * ContestProblem findFirst
   */
  export type ContestProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter, which ContestProblem to fetch.
     */
    where?: ContestProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestProblems to fetch.
     */
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestProblems.
     */
    cursor?: ContestProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestProblems.
     */
    distinct?: ContestProblemScalarFieldEnum | ContestProblemScalarFieldEnum[]
  }

  /**
   * ContestProblem findFirstOrThrow
   */
  export type ContestProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter, which ContestProblem to fetch.
     */
    where?: ContestProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestProblems to fetch.
     */
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestProblems.
     */
    cursor?: ContestProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestProblems.
     */
    distinct?: ContestProblemScalarFieldEnum | ContestProblemScalarFieldEnum[]
  }

  /**
   * ContestProblem findMany
   */
  export type ContestProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter, which ContestProblems to fetch.
     */
    where?: ContestProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestProblems to fetch.
     */
    orderBy?: ContestProblemOrderByWithRelationInput | ContestProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestProblems.
     */
    cursor?: ContestProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestProblems.
     */
    skip?: number
    distinct?: ContestProblemScalarFieldEnum | ContestProblemScalarFieldEnum[]
  }

  /**
   * ContestProblem create
   */
  export type ContestProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestProblem.
     */
    data: XOR<ContestProblemCreateInput, ContestProblemUncheckedCreateInput>
  }

  /**
   * ContestProblem createMany
   */
  export type ContestProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestProblems.
     */
    data: ContestProblemCreateManyInput | ContestProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestProblem createManyAndReturn
   */
  export type ContestProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * The data used to create many ContestProblems.
     */
    data: ContestProblemCreateManyInput | ContestProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestProblem update
   */
  export type ContestProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestProblem.
     */
    data: XOR<ContestProblemUpdateInput, ContestProblemUncheckedUpdateInput>
    /**
     * Choose, which ContestProblem to update.
     */
    where: ContestProblemWhereUniqueInput
  }

  /**
   * ContestProblem updateMany
   */
  export type ContestProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestProblems.
     */
    data: XOR<ContestProblemUpdateManyMutationInput, ContestProblemUncheckedUpdateManyInput>
    /**
     * Filter which ContestProblems to update
     */
    where?: ContestProblemWhereInput
    /**
     * Limit how many ContestProblems to update.
     */
    limit?: number
  }

  /**
   * ContestProblem updateManyAndReturn
   */
  export type ContestProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * The data used to update ContestProblems.
     */
    data: XOR<ContestProblemUpdateManyMutationInput, ContestProblemUncheckedUpdateManyInput>
    /**
     * Filter which ContestProblems to update
     */
    where?: ContestProblemWhereInput
    /**
     * Limit how many ContestProblems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestProblem upsert
   */
  export type ContestProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestProblem to update in case it exists.
     */
    where: ContestProblemWhereUniqueInput
    /**
     * In case the ContestProblem found by the `where` argument doesn't exist, create a new ContestProblem with this data.
     */
    create: XOR<ContestProblemCreateInput, ContestProblemUncheckedCreateInput>
    /**
     * In case the ContestProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestProblemUpdateInput, ContestProblemUncheckedUpdateInput>
  }

  /**
   * ContestProblem delete
   */
  export type ContestProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
    /**
     * Filter which ContestProblem to delete.
     */
    where: ContestProblemWhereUniqueInput
  }

  /**
   * ContestProblem deleteMany
   */
  export type ContestProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestProblems to delete
     */
    where?: ContestProblemWhereInput
    /**
     * Limit how many ContestProblems to delete.
     */
    limit?: number
  }

  /**
   * ContestProblem without action
   */
  export type ContestProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestProblem
     */
    select?: ContestProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestProblem
     */
    omit?: ContestProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestProblemInclude<ExtArgs> | null
  }


  /**
   * Model ContestRegistration
   */

  export type AggregateContestRegistration = {
    _count: ContestRegistrationCountAggregateOutputType | null
    _min: ContestRegistrationMinAggregateOutputType | null
    _max: ContestRegistrationMaxAggregateOutputType | null
  }

  export type ContestRegistrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    joinedAt: Date | null
  }

  export type ContestRegistrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    joinedAt: Date | null
  }

  export type ContestRegistrationCountAggregateOutputType = {
    id: number
    userId: number
    contestId: number
    joinedAt: number
    _all: number
  }


  export type ContestRegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    joinedAt?: true
  }

  export type ContestRegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    joinedAt?: true
  }

  export type ContestRegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    joinedAt?: true
    _all?: true
  }

  export type ContestRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestRegistration to aggregate.
     */
    where?: ContestRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestRegistrations to fetch.
     */
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestRegistrations
    **/
    _count?: true | ContestRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestRegistrationMaxAggregateInputType
  }

  export type GetContestRegistrationAggregateType<T extends ContestRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateContestRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestRegistration[P]>
      : GetScalarType<T[P], AggregateContestRegistration[P]>
  }




  export type ContestRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestRegistrationWhereInput
    orderBy?: ContestRegistrationOrderByWithAggregationInput | ContestRegistrationOrderByWithAggregationInput[]
    by: ContestRegistrationScalarFieldEnum[] | ContestRegistrationScalarFieldEnum
    having?: ContestRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestRegistrationCountAggregateInputType | true
    _min?: ContestRegistrationMinAggregateInputType
    _max?: ContestRegistrationMaxAggregateInputType
  }

  export type ContestRegistrationGroupByOutputType = {
    id: string
    userId: string
    contestId: string
    joinedAt: Date
    _count: ContestRegistrationCountAggregateOutputType | null
    _min: ContestRegistrationMinAggregateOutputType | null
    _max: ContestRegistrationMaxAggregateOutputType | null
  }

  type GetContestRegistrationGroupByPayload<T extends ContestRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], ContestRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type ContestRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestRegistration"]>

  export type ContestRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestRegistration"]>

  export type ContestRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestRegistration"]>

  export type ContestRegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    contestId?: boolean
    joinedAt?: boolean
  }

  export type ContestRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contestId" | "joinedAt", ExtArgs["result"]["contestRegistration"]>
  export type ContestRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type ContestRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type ContestRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }

  export type $ContestRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestRegistration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contest: Prisma.$ContestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contestId: string
      joinedAt: Date
    }, ExtArgs["result"]["contestRegistration"]>
    composites: {}
  }

  type ContestRegistrationGetPayload<S extends boolean | null | undefined | ContestRegistrationDefaultArgs> = $Result.GetResult<Prisma.$ContestRegistrationPayload, S>

  type ContestRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestRegistrationCountAggregateInputType | true
    }

  export interface ContestRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestRegistration'], meta: { name: 'ContestRegistration' } }
    /**
     * Find zero or one ContestRegistration that matches the filter.
     * @param {ContestRegistrationFindUniqueArgs} args - Arguments to find a ContestRegistration
     * @example
     * // Get one ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestRegistrationFindUniqueArgs>(args: SelectSubset<T, ContestRegistrationFindUniqueArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestRegistrationFindUniqueOrThrowArgs} args - Arguments to find a ContestRegistration
     * @example
     * // Get one ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationFindFirstArgs} args - Arguments to find a ContestRegistration
     * @example
     * // Get one ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestRegistrationFindFirstArgs>(args?: SelectSubset<T, ContestRegistrationFindFirstArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationFindFirstOrThrowArgs} args - Arguments to find a ContestRegistration
     * @example
     * // Get one ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestRegistrations
     * const contestRegistrations = await prisma.contestRegistration.findMany()
     * 
     * // Get first 10 ContestRegistrations
     * const contestRegistrations = await prisma.contestRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestRegistrationWithIdOnly = await prisma.contestRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestRegistrationFindManyArgs>(args?: SelectSubset<T, ContestRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestRegistration.
     * @param {ContestRegistrationCreateArgs} args - Arguments to create a ContestRegistration.
     * @example
     * // Create one ContestRegistration
     * const ContestRegistration = await prisma.contestRegistration.create({
     *   data: {
     *     // ... data to create a ContestRegistration
     *   }
     * })
     * 
     */
    create<T extends ContestRegistrationCreateArgs>(args: SelectSubset<T, ContestRegistrationCreateArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestRegistrations.
     * @param {ContestRegistrationCreateManyArgs} args - Arguments to create many ContestRegistrations.
     * @example
     * // Create many ContestRegistrations
     * const contestRegistration = await prisma.contestRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestRegistrationCreateManyArgs>(args?: SelectSubset<T, ContestRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContestRegistrations and returns the data saved in the database.
     * @param {ContestRegistrationCreateManyAndReturnArgs} args - Arguments to create many ContestRegistrations.
     * @example
     * // Create many ContestRegistrations
     * const contestRegistration = await prisma.contestRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContestRegistrations and only return the `id`
     * const contestRegistrationWithIdOnly = await prisma.contestRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContestRegistration.
     * @param {ContestRegistrationDeleteArgs} args - Arguments to delete one ContestRegistration.
     * @example
     * // Delete one ContestRegistration
     * const ContestRegistration = await prisma.contestRegistration.delete({
     *   where: {
     *     // ... filter to delete one ContestRegistration
     *   }
     * })
     * 
     */
    delete<T extends ContestRegistrationDeleteArgs>(args: SelectSubset<T, ContestRegistrationDeleteArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestRegistration.
     * @param {ContestRegistrationUpdateArgs} args - Arguments to update one ContestRegistration.
     * @example
     * // Update one ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestRegistrationUpdateArgs>(args: SelectSubset<T, ContestRegistrationUpdateArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestRegistrations.
     * @param {ContestRegistrationDeleteManyArgs} args - Arguments to filter ContestRegistrations to delete.
     * @example
     * // Delete a few ContestRegistrations
     * const { count } = await prisma.contestRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestRegistrationDeleteManyArgs>(args?: SelectSubset<T, ContestRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestRegistrations
     * const contestRegistration = await prisma.contestRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestRegistrationUpdateManyArgs>(args: SelectSubset<T, ContestRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestRegistrations and returns the data updated in the database.
     * @param {ContestRegistrationUpdateManyAndReturnArgs} args - Arguments to update many ContestRegistrations.
     * @example
     * // Update many ContestRegistrations
     * const contestRegistration = await prisma.contestRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContestRegistrations and only return the `id`
     * const contestRegistrationWithIdOnly = await prisma.contestRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContestRegistration.
     * @param {ContestRegistrationUpsertArgs} args - Arguments to update or create a ContestRegistration.
     * @example
     * // Update or create a ContestRegistration
     * const contestRegistration = await prisma.contestRegistration.upsert({
     *   create: {
     *     // ... data to create a ContestRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestRegistration we want to update
     *   }
     * })
     */
    upsert<T extends ContestRegistrationUpsertArgs>(args: SelectSubset<T, ContestRegistrationUpsertArgs<ExtArgs>>): Prisma__ContestRegistrationClient<$Result.GetResult<Prisma.$ContestRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationCountArgs} args - Arguments to filter ContestRegistrations to count.
     * @example
     * // Count the number of ContestRegistrations
     * const count = await prisma.contestRegistration.count({
     *   where: {
     *     // ... the filter for the ContestRegistrations we want to count
     *   }
     * })
    **/
    count<T extends ContestRegistrationCountArgs>(
      args?: Subset<T, ContestRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestRegistrationAggregateArgs>(args: Subset<T, ContestRegistrationAggregateArgs>): Prisma.PrismaPromise<GetContestRegistrationAggregateType<T>>

    /**
     * Group by ContestRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: ContestRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestRegistration model
   */
  readonly fields: ContestRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestRegistration model
   */
  interface ContestRegistrationFieldRefs {
    readonly id: FieldRef<"ContestRegistration", 'String'>
    readonly userId: FieldRef<"ContestRegistration", 'String'>
    readonly contestId: FieldRef<"ContestRegistration", 'String'>
    readonly joinedAt: FieldRef<"ContestRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContestRegistration findUnique
   */
  export type ContestRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which ContestRegistration to fetch.
     */
    where: ContestRegistrationWhereUniqueInput
  }

  /**
   * ContestRegistration findUniqueOrThrow
   */
  export type ContestRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which ContestRegistration to fetch.
     */
    where: ContestRegistrationWhereUniqueInput
  }

  /**
   * ContestRegistration findFirst
   */
  export type ContestRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which ContestRegistration to fetch.
     */
    where?: ContestRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestRegistrations to fetch.
     */
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestRegistrations.
     */
    cursor?: ContestRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestRegistrations.
     */
    distinct?: ContestRegistrationScalarFieldEnum | ContestRegistrationScalarFieldEnum[]
  }

  /**
   * ContestRegistration findFirstOrThrow
   */
  export type ContestRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which ContestRegistration to fetch.
     */
    where?: ContestRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestRegistrations to fetch.
     */
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestRegistrations.
     */
    cursor?: ContestRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestRegistrations.
     */
    distinct?: ContestRegistrationScalarFieldEnum | ContestRegistrationScalarFieldEnum[]
  }

  /**
   * ContestRegistration findMany
   */
  export type ContestRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which ContestRegistrations to fetch.
     */
    where?: ContestRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestRegistrations to fetch.
     */
    orderBy?: ContestRegistrationOrderByWithRelationInput | ContestRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestRegistrations.
     */
    cursor?: ContestRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestRegistrations.
     */
    skip?: number
    distinct?: ContestRegistrationScalarFieldEnum | ContestRegistrationScalarFieldEnum[]
  }

  /**
   * ContestRegistration create
   */
  export type ContestRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestRegistration.
     */
    data: XOR<ContestRegistrationCreateInput, ContestRegistrationUncheckedCreateInput>
  }

  /**
   * ContestRegistration createMany
   */
  export type ContestRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestRegistrations.
     */
    data: ContestRegistrationCreateManyInput | ContestRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestRegistration createManyAndReturn
   */
  export type ContestRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many ContestRegistrations.
     */
    data: ContestRegistrationCreateManyInput | ContestRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestRegistration update
   */
  export type ContestRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestRegistration.
     */
    data: XOR<ContestRegistrationUpdateInput, ContestRegistrationUncheckedUpdateInput>
    /**
     * Choose, which ContestRegistration to update.
     */
    where: ContestRegistrationWhereUniqueInput
  }

  /**
   * ContestRegistration updateMany
   */
  export type ContestRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestRegistrations.
     */
    data: XOR<ContestRegistrationUpdateManyMutationInput, ContestRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which ContestRegistrations to update
     */
    where?: ContestRegistrationWhereInput
    /**
     * Limit how many ContestRegistrations to update.
     */
    limit?: number
  }

  /**
   * ContestRegistration updateManyAndReturn
   */
  export type ContestRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update ContestRegistrations.
     */
    data: XOR<ContestRegistrationUpdateManyMutationInput, ContestRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which ContestRegistrations to update
     */
    where?: ContestRegistrationWhereInput
    /**
     * Limit how many ContestRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestRegistration upsert
   */
  export type ContestRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestRegistration to update in case it exists.
     */
    where: ContestRegistrationWhereUniqueInput
    /**
     * In case the ContestRegistration found by the `where` argument doesn't exist, create a new ContestRegistration with this data.
     */
    create: XOR<ContestRegistrationCreateInput, ContestRegistrationUncheckedCreateInput>
    /**
     * In case the ContestRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestRegistrationUpdateInput, ContestRegistrationUncheckedUpdateInput>
  }

  /**
   * ContestRegistration delete
   */
  export type ContestRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
    /**
     * Filter which ContestRegistration to delete.
     */
    where: ContestRegistrationWhereUniqueInput
  }

  /**
   * ContestRegistration deleteMany
   */
  export type ContestRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestRegistrations to delete
     */
    where?: ContestRegistrationWhereInput
    /**
     * Limit how many ContestRegistrations to delete.
     */
    limit?: number
  }

  /**
   * ContestRegistration without action
   */
  export type ContestRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestRegistration
     */
    select?: ContestRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestRegistration
     */
    omit?: ContestRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model ContestSubmission
   */

  export type AggregateContestSubmission = {
    _count: ContestSubmissionCountAggregateOutputType | null
    _min: ContestSubmissionMinAggregateOutputType | null
    _max: ContestSubmissionMaxAggregateOutputType | null
  }

  export type ContestSubmissionMinAggregateOutputType = {
    id: string | null
    contestId: string | null
    submissionId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ContestSubmissionMaxAggregateOutputType = {
    id: string | null
    contestId: string | null
    submissionId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ContestSubmissionCountAggregateOutputType = {
    id: number
    contestId: number
    submissionId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ContestSubmissionMinAggregateInputType = {
    id?: true
    contestId?: true
    submissionId?: true
    createdAt?: true
    userId?: true
  }

  export type ContestSubmissionMaxAggregateInputType = {
    id?: true
    contestId?: true
    submissionId?: true
    createdAt?: true
    userId?: true
  }

  export type ContestSubmissionCountAggregateInputType = {
    id?: true
    contestId?: true
    submissionId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ContestSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestSubmission to aggregate.
     */
    where?: ContestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestSubmissions to fetch.
     */
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestSubmissions
    **/
    _count?: true | ContestSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestSubmissionMaxAggregateInputType
  }

  export type GetContestSubmissionAggregateType<T extends ContestSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContestSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestSubmission[P]>
      : GetScalarType<T[P], AggregateContestSubmission[P]>
  }




  export type ContestSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestSubmissionWhereInput
    orderBy?: ContestSubmissionOrderByWithAggregationInput | ContestSubmissionOrderByWithAggregationInput[]
    by: ContestSubmissionScalarFieldEnum[] | ContestSubmissionScalarFieldEnum
    having?: ContestSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestSubmissionCountAggregateInputType | true
    _min?: ContestSubmissionMinAggregateInputType
    _max?: ContestSubmissionMaxAggregateInputType
  }

  export type ContestSubmissionGroupByOutputType = {
    id: string
    contestId: string
    submissionId: string
    createdAt: Date
    userId: string | null
    _count: ContestSubmissionCountAggregateOutputType | null
    _min: ContestSubmissionMinAggregateOutputType | null
    _max: ContestSubmissionMaxAggregateOutputType | null
  }

  type GetContestSubmissionGroupByPayload<T extends ContestSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContestSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContestSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    submissionId?: boolean
    createdAt?: boolean
    userId?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }, ExtArgs["result"]["contestSubmission"]>

  export type ContestSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    submissionId?: boolean
    createdAt?: boolean
    userId?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }, ExtArgs["result"]["contestSubmission"]>

  export type ContestSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    submissionId?: boolean
    createdAt?: boolean
    userId?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }, ExtArgs["result"]["contestSubmission"]>

  export type ContestSubmissionSelectScalar = {
    id?: boolean
    contestId?: boolean
    submissionId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ContestSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestId" | "submissionId" | "createdAt" | "userId", ExtArgs["result"]["contestSubmission"]>
  export type ContestSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }
  export type ContestSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }
  export type ContestSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    User?: boolean | ContestSubmission$UserArgs<ExtArgs>
  }

  export type $ContestSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestSubmission"
    objects: {
      contest: Prisma.$ContestPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contestId: string
      submissionId: string
      createdAt: Date
      userId: string | null
    }, ExtArgs["result"]["contestSubmission"]>
    composites: {}
  }

  type ContestSubmissionGetPayload<S extends boolean | null | undefined | ContestSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContestSubmissionPayload, S>

  type ContestSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestSubmissionCountAggregateInputType | true
    }

  export interface ContestSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestSubmission'], meta: { name: 'ContestSubmission' } }
    /**
     * Find zero or one ContestSubmission that matches the filter.
     * @param {ContestSubmissionFindUniqueArgs} args - Arguments to find a ContestSubmission
     * @example
     * // Get one ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestSubmissionFindUniqueArgs>(args: SelectSubset<T, ContestSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContestSubmission
     * @example
     * // Get one ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionFindFirstArgs} args - Arguments to find a ContestSubmission
     * @example
     * // Get one ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestSubmissionFindFirstArgs>(args?: SelectSubset<T, ContestSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContestSubmission
     * @example
     * // Get one ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestSubmissions
     * const contestSubmissions = await prisma.contestSubmission.findMany()
     * 
     * // Get first 10 ContestSubmissions
     * const contestSubmissions = await prisma.contestSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestSubmissionWithIdOnly = await prisma.contestSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestSubmissionFindManyArgs>(args?: SelectSubset<T, ContestSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestSubmission.
     * @param {ContestSubmissionCreateArgs} args - Arguments to create a ContestSubmission.
     * @example
     * // Create one ContestSubmission
     * const ContestSubmission = await prisma.contestSubmission.create({
     *   data: {
     *     // ... data to create a ContestSubmission
     *   }
     * })
     * 
     */
    create<T extends ContestSubmissionCreateArgs>(args: SelectSubset<T, ContestSubmissionCreateArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestSubmissions.
     * @param {ContestSubmissionCreateManyArgs} args - Arguments to create many ContestSubmissions.
     * @example
     * // Create many ContestSubmissions
     * const contestSubmission = await prisma.contestSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestSubmissionCreateManyArgs>(args?: SelectSubset<T, ContestSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContestSubmissions and returns the data saved in the database.
     * @param {ContestSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContestSubmissions.
     * @example
     * // Create many ContestSubmissions
     * const contestSubmission = await prisma.contestSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContestSubmissions and only return the `id`
     * const contestSubmissionWithIdOnly = await prisma.contestSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContestSubmission.
     * @param {ContestSubmissionDeleteArgs} args - Arguments to delete one ContestSubmission.
     * @example
     * // Delete one ContestSubmission
     * const ContestSubmission = await prisma.contestSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContestSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContestSubmissionDeleteArgs>(args: SelectSubset<T, ContestSubmissionDeleteArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestSubmission.
     * @param {ContestSubmissionUpdateArgs} args - Arguments to update one ContestSubmission.
     * @example
     * // Update one ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestSubmissionUpdateArgs>(args: SelectSubset<T, ContestSubmissionUpdateArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestSubmissions.
     * @param {ContestSubmissionDeleteManyArgs} args - Arguments to filter ContestSubmissions to delete.
     * @example
     * // Delete a few ContestSubmissions
     * const { count } = await prisma.contestSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContestSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestSubmissions
     * const contestSubmission = await prisma.contestSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestSubmissionUpdateManyArgs>(args: SelectSubset<T, ContestSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestSubmissions and returns the data updated in the database.
     * @param {ContestSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContestSubmissions.
     * @example
     * // Update many ContestSubmissions
     * const contestSubmission = await prisma.contestSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContestSubmissions and only return the `id`
     * const contestSubmissionWithIdOnly = await prisma.contestSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContestSubmission.
     * @param {ContestSubmissionUpsertArgs} args - Arguments to update or create a ContestSubmission.
     * @example
     * // Update or create a ContestSubmission
     * const contestSubmission = await prisma.contestSubmission.upsert({
     *   create: {
     *     // ... data to create a ContestSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContestSubmissionUpsertArgs>(args: SelectSubset<T, ContestSubmissionUpsertArgs<ExtArgs>>): Prisma__ContestSubmissionClient<$Result.GetResult<Prisma.$ContestSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionCountArgs} args - Arguments to filter ContestSubmissions to count.
     * @example
     * // Count the number of ContestSubmissions
     * const count = await prisma.contestSubmission.count({
     *   where: {
     *     // ... the filter for the ContestSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContestSubmissionCountArgs>(
      args?: Subset<T, ContestSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestSubmissionAggregateArgs>(args: Subset<T, ContestSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContestSubmissionAggregateType<T>>

    /**
     * Group by ContestSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContestSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestSubmission model
   */
  readonly fields: ContestSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends ContestSubmission$UserArgs<ExtArgs> = {}>(args?: Subset<T, ContestSubmission$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestSubmission model
   */
  interface ContestSubmissionFieldRefs {
    readonly id: FieldRef<"ContestSubmission", 'String'>
    readonly contestId: FieldRef<"ContestSubmission", 'String'>
    readonly submissionId: FieldRef<"ContestSubmission", 'String'>
    readonly createdAt: FieldRef<"ContestSubmission", 'DateTime'>
    readonly userId: FieldRef<"ContestSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContestSubmission findUnique
   */
  export type ContestSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContestSubmission to fetch.
     */
    where: ContestSubmissionWhereUniqueInput
  }

  /**
   * ContestSubmission findUniqueOrThrow
   */
  export type ContestSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContestSubmission to fetch.
     */
    where: ContestSubmissionWhereUniqueInput
  }

  /**
   * ContestSubmission findFirst
   */
  export type ContestSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContestSubmission to fetch.
     */
    where?: ContestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestSubmissions to fetch.
     */
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestSubmissions.
     */
    cursor?: ContestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestSubmissions.
     */
    distinct?: ContestSubmissionScalarFieldEnum | ContestSubmissionScalarFieldEnum[]
  }

  /**
   * ContestSubmission findFirstOrThrow
   */
  export type ContestSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContestSubmission to fetch.
     */
    where?: ContestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestSubmissions to fetch.
     */
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestSubmissions.
     */
    cursor?: ContestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestSubmissions.
     */
    distinct?: ContestSubmissionScalarFieldEnum | ContestSubmissionScalarFieldEnum[]
  }

  /**
   * ContestSubmission findMany
   */
  export type ContestSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContestSubmissions to fetch.
     */
    where?: ContestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestSubmissions to fetch.
     */
    orderBy?: ContestSubmissionOrderByWithRelationInput | ContestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestSubmissions.
     */
    cursor?: ContestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestSubmissions.
     */
    skip?: number
    distinct?: ContestSubmissionScalarFieldEnum | ContestSubmissionScalarFieldEnum[]
  }

  /**
   * ContestSubmission create
   */
  export type ContestSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestSubmission.
     */
    data: XOR<ContestSubmissionCreateInput, ContestSubmissionUncheckedCreateInput>
  }

  /**
   * ContestSubmission createMany
   */
  export type ContestSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestSubmissions.
     */
    data: ContestSubmissionCreateManyInput | ContestSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestSubmission createManyAndReturn
   */
  export type ContestSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContestSubmissions.
     */
    data: ContestSubmissionCreateManyInput | ContestSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestSubmission update
   */
  export type ContestSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestSubmission.
     */
    data: XOR<ContestSubmissionUpdateInput, ContestSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContestSubmission to update.
     */
    where: ContestSubmissionWhereUniqueInput
  }

  /**
   * ContestSubmission updateMany
   */
  export type ContestSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestSubmissions.
     */
    data: XOR<ContestSubmissionUpdateManyMutationInput, ContestSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContestSubmissions to update
     */
    where?: ContestSubmissionWhereInput
    /**
     * Limit how many ContestSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContestSubmission updateManyAndReturn
   */
  export type ContestSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContestSubmissions.
     */
    data: XOR<ContestSubmissionUpdateManyMutationInput, ContestSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContestSubmissions to update
     */
    where?: ContestSubmissionWhereInput
    /**
     * Limit how many ContestSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestSubmission upsert
   */
  export type ContestSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestSubmission to update in case it exists.
     */
    where: ContestSubmissionWhereUniqueInput
    /**
     * In case the ContestSubmission found by the `where` argument doesn't exist, create a new ContestSubmission with this data.
     */
    create: XOR<ContestSubmissionCreateInput, ContestSubmissionUncheckedCreateInput>
    /**
     * In case the ContestSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestSubmissionUpdateInput, ContestSubmissionUncheckedUpdateInput>
  }

  /**
   * ContestSubmission delete
   */
  export type ContestSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ContestSubmission to delete.
     */
    where: ContestSubmissionWhereUniqueInput
  }

  /**
   * ContestSubmission deleteMany
   */
  export type ContestSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestSubmissions to delete
     */
    where?: ContestSubmissionWhereInput
    /**
     * Limit how many ContestSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContestSubmission.User
   */
  export type ContestSubmission$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ContestSubmission without action
   */
  export type ContestSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestSubmission
     */
    select?: ContestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestSubmission
     */
    omit?: ContestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    role: 'role',
    password: 'password',
    isBlocked: 'isBlocked',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpires: 'emailVerificationExpires',
    plan: 'plan',
    subscriptionExpires: 'subscriptionExpires',
    lastActivityDate: 'lastActivityDate',
    currentStreak: 'currentStreak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDailyActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserDailyActivityScalarFieldEnum = (typeof UserDailyActivityScalarFieldEnum)[keyof typeof UserDailyActivityScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    companies: 'companies',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorials: 'editorials',
    testcases: 'testcases',
    codeSnippets: 'codeSnippets',
    referenceSolutions: 'referenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestCaseResultScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testCase: 'testCase',
    passed: 'passed',
    stdout: 'stdout',
    expected: 'expected',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestCaseResultScalarFieldEnum = (typeof TestCaseResultScalarFieldEnum)[keyof typeof TestCaseResultScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPublic: 'isPublic'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ProblemsInPlaylistScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemsInPlaylistScalarFieldEnum = (typeof ProblemsInPlaylistScalarFieldEnum)[keyof typeof ProblemsInPlaylistScalarFieldEnum]


  export const ContestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum]


  export const ContestProblemScalarFieldEnum: {
    id: 'id',
    contestId: 'contestId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContestProblemScalarFieldEnum = (typeof ContestProblemScalarFieldEnum)[keyof typeof ContestProblemScalarFieldEnum]


  export const ContestRegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contestId: 'contestId',
    joinedAt: 'joinedAt'
  };

  export type ContestRegistrationScalarFieldEnum = (typeof ContestRegistrationScalarFieldEnum)[keyof typeof ContestRegistrationScalarFieldEnum]


  export const ContestSubmissionScalarFieldEnum: {
    id: 'id',
    contestId: 'contestId',
    submissionId: 'submissionId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ContestSubmissionScalarFieldEnum = (typeof ContestSubmissionScalarFieldEnum)[keyof typeof ContestSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isBlocked?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    subscriptionExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastActivityDate?: DateTimeNullableFilter<"User"> | Date | string | null
    currentStreak?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlaylistListRelationFilter
    dailyActivities?: UserDailyActivityListRelationFilter
    contestRegistrations?: ContestRegistrationListRelationFilter
    contestSubmissions?: ContestSubmissionListRelationFilter
    contestsCreated?: ContestListRelationFilter
    contest?: ContestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isBlocked?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpires?: SortOrderInput | SortOrder
    plan?: SortOrder
    subscriptionExpires?: SortOrderInput | SortOrder
    lastActivityDate?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submission?: SubmissionOrderByRelationAggregateInput
    problemSolved?: ProblemSolvedOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    dailyActivities?: UserDailyActivityOrderByRelationAggregateInput
    contestRegistrations?: ContestRegistrationOrderByRelationAggregateInput
    contestSubmissions?: ContestSubmissionOrderByRelationAggregateInput
    contestsCreated?: ContestOrderByRelationAggregateInput
    contest?: ContestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isBlocked?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    subscriptionExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastActivityDate?: DateTimeNullableFilter<"User"> | Date | string | null
    currentStreak?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlaylistListRelationFilter
    dailyActivities?: UserDailyActivityListRelationFilter
    contestRegistrations?: ContestRegistrationListRelationFilter
    contestSubmissions?: ContestSubmissionListRelationFilter
    contestsCreated?: ContestListRelationFilter
    contest?: ContestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isBlocked?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpires?: SortOrderInput | SortOrder
    plan?: SortOrder
    subscriptionExpires?: SortOrderInput | SortOrder
    lastActivityDate?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    plan?: EnumPlanTypeWithAggregatesFilter<"User"> | $Enums.PlanType
    subscriptionExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastActivityDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserDailyActivityWhereInput = {
    AND?: UserDailyActivityWhereInput | UserDailyActivityWhereInput[]
    OR?: UserDailyActivityWhereInput[]
    NOT?: UserDailyActivityWhereInput | UserDailyActivityWhereInput[]
    id?: StringFilter<"UserDailyActivity"> | string
    userId?: StringFilter<"UserDailyActivity"> | string
    date?: DateTimeFilter<"UserDailyActivity"> | Date | string
    createdAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDailyActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDailyActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: UserDailyActivityUserIdDateCompoundUniqueInput
    AND?: UserDailyActivityWhereInput | UserDailyActivityWhereInput[]
    OR?: UserDailyActivityWhereInput[]
    NOT?: UserDailyActivityWhereInput | UserDailyActivityWhereInput[]
    userId?: StringFilter<"UserDailyActivity"> | string
    date?: DateTimeFilter<"UserDailyActivity"> | Date | string
    createdAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type UserDailyActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserDailyActivityCountOrderByAggregateInput
    _max?: UserDailyActivityMaxOrderByAggregateInput
    _min?: UserDailyActivityMinOrderByAggregateInput
  }

  export type UserDailyActivityScalarWhereWithAggregatesInput = {
    AND?: UserDailyActivityScalarWhereWithAggregatesInput | UserDailyActivityScalarWhereWithAggregatesInput[]
    OR?: UserDailyActivityScalarWhereWithAggregatesInput[]
    NOT?: UserDailyActivityScalarWhereWithAggregatesInput | UserDailyActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDailyActivity"> | string
    userId?: StringWithAggregatesFilter<"UserDailyActivity"> | string
    date?: DateTimeWithAggregatesFilter<"UserDailyActivity"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserDailyActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserDailyActivity"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    companies?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorials?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylists?: ProblemsInPlaylistListRelationFilter
    contestProblems?: ContestProblemListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    companies?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorials?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByRelationAggregateInput
    solvedBy?: ProblemSolvedOrderByRelationAggregateInput
    problemsPlaylists?: ProblemsInPlaylistOrderByRelationAggregateInput
    contestProblems?: ContestProblemOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    companies?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorials?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylists?: ProblemsInPlaylistListRelationFilter
    contestProblems?: ContestProblemListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    companies?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorials?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    companies?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorials?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testcases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCaseResultListRelationFilter
    contestSubmission?: XOR<ContestSubmissionNullableScalarRelationFilter, ContestSubmissionWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testCases?: TestCaseResultOrderByRelationAggregateInput
    contestSubmission?: ContestSubmissionOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCaseResultListRelationFilter
    contestSubmission?: XOR<ContestSubmissionNullableScalarRelationFilter, ContestSubmissionWhereInput> | null
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submission">
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type TestCaseResultWhereInput = {
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type TestCaseResultOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type TestCaseResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type TestCaseResultOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCaseResultCountOrderByAggregateInput
    _avg?: TestCaseResultAvgOrderByAggregateInput
    _max?: TestCaseResultMaxOrderByAggregateInput
    _min?: TestCaseResultMinOrderByAggregateInput
    _sum?: TestCaseResultSumOrderByAggregateInput
  }

  export type TestCaseResultScalarWhereWithAggregatesInput = {
    AND?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    OR?: TestCaseResultScalarWhereWithAggregatesInput[]
    NOT?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCaseResult"> | string
    submissionId?: StringWithAggregatesFilter<"TestCaseResult"> | string
    testCase?: IntWithAggregatesFilter<"TestCaseResult"> | number
    passed?: BoolWithAggregatesFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    expected?: StringWithAggregatesFilter<"TestCaseResult"> | string
    stderr?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    status?: StringWithAggregatesFilter<"TestCaseResult"> | string
    memory?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    time?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCaseResult"> | Date | string
  }

  export type ProblemSolvedWhereInput = {
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: ProblemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type ProblemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemSolvedCountOrderByAggregateInput
    _max?: ProblemSolvedMaxOrderByAggregateInput
    _min?: ProblemSolvedMinOrderByAggregateInput
  }

  export type ProblemSolvedScalarWhereWithAggregatesInput = {
    AND?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    OR?: ProblemSolvedScalarWhereWithAggregatesInput[]
    NOT?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemSolved"> | string
    userId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    problemId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    isPublic?: BoolFilter<"Playlist"> | boolean
    problems?: ProblemsInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    problems?: ProblemsInPlaylistOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: PlaylistNameUserIdCompoundUniqueInput
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    isPublic?: BoolFilter<"Playlist"> | boolean
    problems?: ProblemsInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name_userId">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Playlist"> | boolean
  }

  export type ProblemsInPlaylistWhereInput = {
    AND?: ProblemsInPlaylistWhereInput | ProblemsInPlaylistWhereInput[]
    OR?: ProblemsInPlaylistWhereInput[]
    NOT?: ProblemsInPlaylistWhereInput | ProblemsInPlaylistWhereInput[]
    id?: StringFilter<"ProblemsInPlaylist"> | string
    playlistId?: StringFilter<"ProblemsInPlaylist"> | string
    problemId?: StringFilter<"ProblemsInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemsInPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemsInPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_problemId?: ProblemsInPlaylistPlaylistIdProblemIdCompoundUniqueInput
    AND?: ProblemsInPlaylistWhereInput | ProblemsInPlaylistWhereInput[]
    OR?: ProblemsInPlaylistWhereInput[]
    NOT?: ProblemsInPlaylistWhereInput | ProblemsInPlaylistWhereInput[]
    playlistId?: StringFilter<"ProblemsInPlaylist"> | string
    problemId?: StringFilter<"ProblemsInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "playlistId_problemId">

  export type ProblemsInPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemsInPlaylistCountOrderByAggregateInput
    _max?: ProblemsInPlaylistMaxOrderByAggregateInput
    _min?: ProblemsInPlaylistMinOrderByAggregateInput
  }

  export type ProblemsInPlaylistScalarWhereWithAggregatesInput = {
    AND?: ProblemsInPlaylistScalarWhereWithAggregatesInput | ProblemsInPlaylistScalarWhereWithAggregatesInput[]
    OR?: ProblemsInPlaylistScalarWhereWithAggregatesInput[]
    NOT?: ProblemsInPlaylistScalarWhereWithAggregatesInput | ProblemsInPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemsInPlaylist"> | string
    playlistId?: StringWithAggregatesFilter<"ProblemsInPlaylist"> | string
    problemId?: StringWithAggregatesFilter<"ProblemsInPlaylist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemsInPlaylist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemsInPlaylist"> | Date | string
  }

  export type ContestWhereInput = {
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    id?: StringFilter<"Contest"> | string
    title?: StringFilter<"Contest"> | string
    description?: StringNullableFilter<"Contest"> | string | null
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    createdBy?: StringFilter<"Contest"> | string
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    updatedAt?: DateTimeFilter<"Contest"> | Date | string
    userId?: StringNullableFilter<"Contest"> | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: ContestProblemListRelationFilter
    registrations?: ContestRegistrationListRelationFilter
    contestSubmissions?: ContestSubmissionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ContestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    problems?: ContestProblemOrderByRelationAggregateInput
    registrations?: ContestRegistrationOrderByRelationAggregateInput
    contestSubmissions?: ContestSubmissionOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type ContestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    title?: StringFilter<"Contest"> | string
    description?: StringNullableFilter<"Contest"> | string | null
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    createdBy?: StringFilter<"Contest"> | string
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    updatedAt?: DateTimeFilter<"Contest"> | Date | string
    userId?: StringNullableFilter<"Contest"> | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: ContestProblemListRelationFilter
    registrations?: ContestRegistrationListRelationFilter
    contestSubmissions?: ContestSubmissionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ContestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ContestCountOrderByAggregateInput
    _max?: ContestMaxOrderByAggregateInput
    _min?: ContestMinOrderByAggregateInput
  }

  export type ContestScalarWhereWithAggregatesInput = {
    AND?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    OR?: ContestScalarWhereWithAggregatesInput[]
    NOT?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contest"> | string
    title?: StringWithAggregatesFilter<"Contest"> | string
    description?: StringNullableWithAggregatesFilter<"Contest"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Contest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Contest"> | string | null
  }

  export type ContestProblemWhereInput = {
    AND?: ContestProblemWhereInput | ContestProblemWhereInput[]
    OR?: ContestProblemWhereInput[]
    NOT?: ContestProblemWhereInput | ContestProblemWhereInput[]
    id?: StringFilter<"ContestProblem"> | string
    contestId?: StringFilter<"ContestProblem"> | string
    problemId?: StringFilter<"ContestProblem"> | string
    createdAt?: DateTimeFilter<"ContestProblem"> | Date | string
    updatedAt?: DateTimeFilter<"ContestProblem"> | Date | string
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ContestProblemOrderByWithRelationInput = {
    id?: SortOrder
    contestId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contest?: ContestOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ContestProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contestId_problemId?: ContestProblemContestIdProblemIdCompoundUniqueInput
    AND?: ContestProblemWhereInput | ContestProblemWhereInput[]
    OR?: ContestProblemWhereInput[]
    NOT?: ContestProblemWhereInput | ContestProblemWhereInput[]
    contestId?: StringFilter<"ContestProblem"> | string
    problemId?: StringFilter<"ContestProblem"> | string
    createdAt?: DateTimeFilter<"ContestProblem"> | Date | string
    updatedAt?: DateTimeFilter<"ContestProblem"> | Date | string
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "contestId_problemId">

  export type ContestProblemOrderByWithAggregationInput = {
    id?: SortOrder
    contestId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContestProblemCountOrderByAggregateInput
    _max?: ContestProblemMaxOrderByAggregateInput
    _min?: ContestProblemMinOrderByAggregateInput
  }

  export type ContestProblemScalarWhereWithAggregatesInput = {
    AND?: ContestProblemScalarWhereWithAggregatesInput | ContestProblemScalarWhereWithAggregatesInput[]
    OR?: ContestProblemScalarWhereWithAggregatesInput[]
    NOT?: ContestProblemScalarWhereWithAggregatesInput | ContestProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContestProblem"> | string
    contestId?: StringWithAggregatesFilter<"ContestProblem"> | string
    problemId?: StringWithAggregatesFilter<"ContestProblem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContestProblem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContestProblem"> | Date | string
  }

  export type ContestRegistrationWhereInput = {
    AND?: ContestRegistrationWhereInput | ContestRegistrationWhereInput[]
    OR?: ContestRegistrationWhereInput[]
    NOT?: ContestRegistrationWhereInput | ContestRegistrationWhereInput[]
    id?: StringFilter<"ContestRegistration"> | string
    userId?: StringFilter<"ContestRegistration"> | string
    contestId?: StringFilter<"ContestRegistration"> | string
    joinedAt?: DateTimeFilter<"ContestRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }

  export type ContestRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type ContestRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contestId?: ContestRegistrationUserIdContestIdCompoundUniqueInput
    AND?: ContestRegistrationWhereInput | ContestRegistrationWhereInput[]
    OR?: ContestRegistrationWhereInput[]
    NOT?: ContestRegistrationWhereInput | ContestRegistrationWhereInput[]
    userId?: StringFilter<"ContestRegistration"> | string
    contestId?: StringFilter<"ContestRegistration"> | string
    joinedAt?: DateTimeFilter<"ContestRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }, "id" | "userId_contestId">

  export type ContestRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    joinedAt?: SortOrder
    _count?: ContestRegistrationCountOrderByAggregateInput
    _max?: ContestRegistrationMaxOrderByAggregateInput
    _min?: ContestRegistrationMinOrderByAggregateInput
  }

  export type ContestRegistrationScalarWhereWithAggregatesInput = {
    AND?: ContestRegistrationScalarWhereWithAggregatesInput | ContestRegistrationScalarWhereWithAggregatesInput[]
    OR?: ContestRegistrationScalarWhereWithAggregatesInput[]
    NOT?: ContestRegistrationScalarWhereWithAggregatesInput | ContestRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContestRegistration"> | string
    userId?: StringWithAggregatesFilter<"ContestRegistration"> | string
    contestId?: StringWithAggregatesFilter<"ContestRegistration"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ContestRegistration"> | Date | string
  }

  export type ContestSubmissionWhereInput = {
    AND?: ContestSubmissionWhereInput | ContestSubmissionWhereInput[]
    OR?: ContestSubmissionWhereInput[]
    NOT?: ContestSubmissionWhereInput | ContestSubmissionWhereInput[]
    id?: StringFilter<"ContestSubmission"> | string
    contestId?: StringFilter<"ContestSubmission"> | string
    submissionId?: StringFilter<"ContestSubmission"> | string
    createdAt?: DateTimeFilter<"ContestSubmission"> | Date | string
    userId?: StringNullableFilter<"ContestSubmission"> | string | null
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ContestSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    contestId?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    contest?: ContestOrderByWithRelationInput
    submission?: SubmissionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ContestSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: ContestSubmissionWhereInput | ContestSubmissionWhereInput[]
    OR?: ContestSubmissionWhereInput[]
    NOT?: ContestSubmissionWhereInput | ContestSubmissionWhereInput[]
    contestId?: StringFilter<"ContestSubmission"> | string
    createdAt?: DateTimeFilter<"ContestSubmission"> | Date | string
    userId?: StringNullableFilter<"ContestSubmission"> | string | null
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "submissionId">

  export type ContestSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    contestId?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ContestSubmissionCountOrderByAggregateInput
    _max?: ContestSubmissionMaxOrderByAggregateInput
    _min?: ContestSubmissionMinOrderByAggregateInput
  }

  export type ContestSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContestSubmissionScalarWhereWithAggregatesInput | ContestSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContestSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContestSubmissionScalarWhereWithAggregatesInput | ContestSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContestSubmission"> | string
    contestId?: StringWithAggregatesFilter<"ContestSubmission"> | string
    submissionId?: StringWithAggregatesFilter<"ContestSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContestSubmission"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"ContestSubmission"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDailyActivityCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyActivitiesInput
  }

  export type UserDailyActivityUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDailyActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyActivitiesNestedInput
  }

  export type UserDailyActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDailyActivityCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDailyActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDailyActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseResultUncheckedCreateInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateManyInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    problems?: ProblemsInPlaylistCreateNestedManyWithoutPlaylistInput
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    problems?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    problems?: ProblemsInPlaylistUpdateManyWithoutPlaylistNestedInput
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    problems?: ProblemsInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProblemsInPlaylistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemsPlaylistsInput
  }

  export type ProblemsInPlaylistUncheckedCreateInput = {
    id?: string
    playlistId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput
  }

  export type ProblemsInPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistCreateManyInput = {
    id?: string
    playlistId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    problems?: ContestProblemCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutContestInput
    User?: UserCreateNestedOneWithoutContestInput
  }

  export type ContestUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    problems?: ContestProblemUncheckedCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationUncheckedCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    problems?: ContestProblemUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutContestNestedInput
    User?: UserUpdateOneWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ContestProblemUncheckedUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ContestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContestProblemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contest: ContestCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutContestProblemsInput
  }

  export type ContestProblemUncheckedCreateInput = {
    id?: string
    contestId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutContestProblemsNestedInput
  }

  export type ContestProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemCreateManyInput = {
    id?: string
    contestId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationCreateInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutContestRegistrationsInput
    contest: ContestCreateNestedOneWithoutRegistrationsInput
  }

  export type ContestRegistrationUncheckedCreateInput = {
    id?: string
    userId: string
    contestId: string
    joinedAt?: Date | string
  }

  export type ContestRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestRegistrationsNestedInput
    contest?: ContestUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type ContestRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationCreateManyInput = {
    id?: string
    userId: string
    contestId: string
    joinedAt?: Date | string
  }

  export type ContestRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestSubmissionCreateInput = {
    id?: string
    createdAt?: Date | string
    contest: ContestCreateNestedOneWithoutContestSubmissionsInput
    submission: SubmissionCreateNestedOneWithoutContestSubmissionInput
    User?: UserCreateNestedOneWithoutContestSubmissionsInput
  }

  export type ContestSubmissionUncheckedCreateInput = {
    id?: string
    contestId: string
    submissionId: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ContestSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutContestSubmissionsNestedInput
    submission?: SubmissionUpdateOneRequiredWithoutContestSubmissionNestedInput
    User?: UserUpdateOneWithoutContestSubmissionsNestedInput
  }

  export type ContestSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContestSubmissionCreateManyInput = {
    id?: string
    contestId: string
    submissionId: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ContestSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: ProblemSolvedWhereInput
    some?: ProblemSolvedWhereInput
    none?: ProblemSolvedWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type UserDailyActivityListRelationFilter = {
    every?: UserDailyActivityWhereInput
    some?: UserDailyActivityWhereInput
    none?: UserDailyActivityWhereInput
  }

  export type ContestRegistrationListRelationFilter = {
    every?: ContestRegistrationWhereInput
    some?: ContestRegistrationWhereInput
    none?: ContestRegistrationWhereInput
  }

  export type ContestSubmissionListRelationFilter = {
    every?: ContestSubmissionWhereInput
    some?: ContestSubmissionWhereInput
    none?: ContestSubmissionWhereInput
  }

  export type ContestListRelationFilter = {
    every?: ContestWhereInput
    some?: ContestWhereInput
    none?: ContestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDailyActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isBlocked?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpires?: SortOrder
    plan?: SortOrder
    subscriptionExpires?: SortOrder
    lastActivityDate?: SortOrder
    currentStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isBlocked?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpires?: SortOrder
    plan?: SortOrder
    subscriptionExpires?: SortOrder
    lastActivityDate?: SortOrder
    currentStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isBlocked?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpires?: SortOrder
    plan?: SortOrder
    subscriptionExpires?: SortOrder
    lastActivityDate?: SortOrder
    currentStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentStreak?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDailyActivityUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type UserDailyActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDailyActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDailyActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemsInPlaylistListRelationFilter = {
    every?: ProblemsInPlaylistWhereInput
    some?: ProblemsInPlaylistWhereInput
    none?: ProblemsInPlaylistWhereInput
  }

  export type ContestProblemListRelationFilter = {
    every?: ContestProblemWhereInput
    some?: ContestProblemWhereInput
    none?: ContestProblemWhereInput
  }

  export type ProblemsInPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    companies?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorials?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorials?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorials?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type TestCaseResultListRelationFilter = {
    every?: TestCaseResultWhereInput
    some?: TestCaseResultWhereInput
    none?: TestCaseResultWhereInput
  }

  export type ContestSubmissionNullableScalarRelationFilter = {
    is?: ContestSubmissionWhereInput | null
    isNot?: ContestSubmissionWhereInput | null
  }

  export type TestCaseResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestCaseResultCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type TestCaseResultMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultSumOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type ProblemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type ProblemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type ProblemsInPlaylistPlaylistIdProblemIdCompoundUniqueInput = {
    playlistId: string
    problemId: string
  }

  export type ProblemsInPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemsInPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemsInPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ContestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContestScalarRelationFilter = {
    is?: ContestWhereInput
    isNot?: ContestWhereInput
  }

  export type ContestProblemContestIdProblemIdCompoundUniqueInput = {
    contestId: string
    problemId: string
  }

  export type ContestProblemCountOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestProblemMinOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestRegistrationUserIdContestIdCompoundUniqueInput = {
    userId: string
    contestId: string
  }

  export type ContestRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ContestSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ContestSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type UserDailyActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput> | UserDailyActivityCreateWithoutUserInput[] | UserDailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDailyActivityCreateOrConnectWithoutUserInput | UserDailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserDailyActivityCreateManyUserInputEnvelope
    connect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
  }

  export type ContestRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput> | ContestRegistrationCreateWithoutUserInput[] | ContestRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutUserInput | ContestRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: ContestRegistrationCreateManyUserInputEnvelope
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
  }

  export type ContestSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput> | ContestSubmissionCreateWithoutUserInput[] | ContestSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutUserInput | ContestSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ContestSubmissionCreateManyUserInputEnvelope
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
  }

  export type ContestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type ContestCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput> | ContestCreateWithoutUserInput[] | ContestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutUserInput | ContestCreateOrConnectWithoutUserInput[]
    createMany?: ContestCreateManyUserInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type UserDailyActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput> | UserDailyActivityCreateWithoutUserInput[] | UserDailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDailyActivityCreateOrConnectWithoutUserInput | UserDailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserDailyActivityCreateManyUserInputEnvelope
    connect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
  }

  export type ContestRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput> | ContestRegistrationCreateWithoutUserInput[] | ContestRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutUserInput | ContestRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: ContestRegistrationCreateManyUserInputEnvelope
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
  }

  export type ContestSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput> | ContestSubmissionCreateWithoutUserInput[] | ContestSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutUserInput | ContestSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ContestSubmissionCreateManyUserInputEnvelope
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
  }

  export type ContestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type ContestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput> | ContestCreateWithoutUserInput[] | ContestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutUserInput | ContestCreateOrConnectWithoutUserInput[]
    createMany?: ContestCreateManyUserInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type UserDailyActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput> | UserDailyActivityCreateWithoutUserInput[] | UserDailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDailyActivityCreateOrConnectWithoutUserInput | UserDailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserDailyActivityUpsertWithWhereUniqueWithoutUserInput | UserDailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDailyActivityCreateManyUserInputEnvelope
    set?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    disconnect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    delete?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    connect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    update?: UserDailyActivityUpdateWithWhereUniqueWithoutUserInput | UserDailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDailyActivityUpdateManyWithWhereWithoutUserInput | UserDailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDailyActivityScalarWhereInput | UserDailyActivityScalarWhereInput[]
  }

  export type ContestRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput> | ContestRegistrationCreateWithoutUserInput[] | ContestRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutUserInput | ContestRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: ContestRegistrationUpsertWithWhereUniqueWithoutUserInput | ContestRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestRegistrationCreateManyUserInputEnvelope
    set?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    disconnect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    delete?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    update?: ContestRegistrationUpdateWithWhereUniqueWithoutUserInput | ContestRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestRegistrationUpdateManyWithWhereWithoutUserInput | ContestRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
  }

  export type ContestSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput> | ContestSubmissionCreateWithoutUserInput[] | ContestSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutUserInput | ContestSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ContestSubmissionUpsertWithWhereUniqueWithoutUserInput | ContestSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestSubmissionCreateManyUserInputEnvelope
    set?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    disconnect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    delete?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    update?: ContestSubmissionUpdateWithWhereUniqueWithoutUserInput | ContestSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestSubmissionUpdateManyWithWhereWithoutUserInput | ContestSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
  }

  export type ContestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutCreatorInput | ContestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutCreatorInput | ContestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutCreatorInput | ContestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type ContestUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput> | ContestCreateWithoutUserInput[] | ContestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutUserInput | ContestCreateOrConnectWithoutUserInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutUserInput | ContestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestCreateManyUserInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutUserInput | ContestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutUserInput | ContestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput> | UserDailyActivityCreateWithoutUserInput[] | UserDailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDailyActivityCreateOrConnectWithoutUserInput | UserDailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserDailyActivityUpsertWithWhereUniqueWithoutUserInput | UserDailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDailyActivityCreateManyUserInputEnvelope
    set?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    disconnect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    delete?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    connect?: UserDailyActivityWhereUniqueInput | UserDailyActivityWhereUniqueInput[]
    update?: UserDailyActivityUpdateWithWhereUniqueWithoutUserInput | UserDailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDailyActivityUpdateManyWithWhereWithoutUserInput | UserDailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDailyActivityScalarWhereInput | UserDailyActivityScalarWhereInput[]
  }

  export type ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput> | ContestRegistrationCreateWithoutUserInput[] | ContestRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutUserInput | ContestRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: ContestRegistrationUpsertWithWhereUniqueWithoutUserInput | ContestRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestRegistrationCreateManyUserInputEnvelope
    set?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    disconnect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    delete?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    update?: ContestRegistrationUpdateWithWhereUniqueWithoutUserInput | ContestRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestRegistrationUpdateManyWithWhereWithoutUserInput | ContestRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
  }

  export type ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput> | ContestSubmissionCreateWithoutUserInput[] | ContestSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutUserInput | ContestSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ContestSubmissionUpsertWithWhereUniqueWithoutUserInput | ContestSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestSubmissionCreateManyUserInputEnvelope
    set?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    disconnect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    delete?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    update?: ContestSubmissionUpdateWithWhereUniqueWithoutUserInput | ContestSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestSubmissionUpdateManyWithWhereWithoutUserInput | ContestSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
  }

  export type ContestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutCreatorInput | ContestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutCreatorInput | ContestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutCreatorInput | ContestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type ContestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput> | ContestCreateWithoutUserInput[] | ContestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutUserInput | ContestCreateOrConnectWithoutUserInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutUserInput | ContestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestCreateManyUserInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutUserInput | ContestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutUserInput | ContestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyActivitiesInput = {
    create?: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyActivitiesInput
    upsert?: UserUpsertWithoutDailyActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyActivitiesInput, UserUpdateWithoutDailyActivitiesInput>, UserUncheckedUpdateWithoutDailyActivitiesInput>
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type ProblemCreatecompaniesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemsInPlaylistCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput> | ProblemsInPlaylistCreateWithoutProblemInput[] | ProblemsInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutProblemInput | ProblemsInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemsInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
  }

  export type ContestProblemCreateNestedManyWithoutProblemInput = {
    create?: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput> | ContestProblemCreateWithoutProblemInput[] | ContestProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutProblemInput | ContestProblemCreateOrConnectWithoutProblemInput[]
    createMany?: ContestProblemCreateManyProblemInputEnvelope
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput> | ProblemsInPlaylistCreateWithoutProblemInput[] | ProblemsInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutProblemInput | ProblemsInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemsInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
  }

  export type ContestProblemUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput> | ContestProblemCreateWithoutProblemInput[] | ContestProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutProblemInput | ContestProblemCreateOrConnectWithoutProblemInput[]
    createMany?: ContestProblemCreateManyProblemInputEnvelope
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProblemUpdatecompaniesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemsInPlaylistUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput> | ProblemsInPlaylistCreateWithoutProblemInput[] | ProblemsInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutProblemInput | ProblemsInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemsInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemsInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemsInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    disconnect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    delete?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    update?: ProblemsInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemsInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemsInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemsInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
  }

  export type ContestProblemUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput> | ContestProblemCreateWithoutProblemInput[] | ContestProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutProblemInput | ContestProblemCreateOrConnectWithoutProblemInput[]
    upsert?: ContestProblemUpsertWithWhereUniqueWithoutProblemInput | ContestProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ContestProblemCreateManyProblemInputEnvelope
    set?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    disconnect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    delete?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    update?: ContestProblemUpdateWithWhereUniqueWithoutProblemInput | ContestProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ContestProblemUpdateManyWithWhereWithoutProblemInput | ContestProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput> | ProblemsInPlaylistCreateWithoutProblemInput[] | ProblemsInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutProblemInput | ProblemsInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemsInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemsInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemsInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    disconnect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    delete?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    update?: ProblemsInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemsInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemsInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemsInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
  }

  export type ContestProblemUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput> | ContestProblemCreateWithoutProblemInput[] | ContestProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutProblemInput | ContestProblemCreateOrConnectWithoutProblemInput[]
    upsert?: ContestProblemUpsertWithWhereUniqueWithoutProblemInput | ContestProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ContestProblemCreateManyProblemInputEnvelope
    set?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    disconnect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    delete?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    update?: ContestProblemUpdateWithWhereUniqueWithoutProblemInput | ContestProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ContestProblemUpdateManyWithWhereWithoutProblemInput | ContestProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestCaseResultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type ContestSubmissionCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutSubmissionInput
    connect?: ContestSubmissionWhereUniqueInput
  }

  export type TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type ContestSubmissionUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutSubmissionInput
    connect?: ContestSubmissionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    upsert?: ProblemUpsertWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionInput, ProblemUpdateWithoutSubmissionInput>, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type ContestSubmissionUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutSubmissionInput
    upsert?: ContestSubmissionUpsertWithoutSubmissionInput
    disconnect?: ContestSubmissionWhereInput | boolean
    delete?: ContestSubmissionWhereInput | boolean
    connect?: ContestSubmissionWhereUniqueInput
    update?: XOR<XOR<ContestSubmissionUpdateToOneWithWhereWithoutSubmissionInput, ContestSubmissionUpdateWithoutSubmissionInput>, ContestSubmissionUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type ContestSubmissionUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutSubmissionInput
    upsert?: ContestSubmissionUpsertWithoutSubmissionInput
    disconnect?: ContestSubmissionWhereInput | boolean
    delete?: ContestSubmissionWhereInput | boolean
    connect?: ContestSubmissionWhereUniqueInput
    update?: XOR<XOR<ContestSubmissionUpdateToOneWithWhereWithoutSubmissionInput, ContestSubmissionUpdateWithoutSubmissionInput>, ContestSubmissionUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubmissionCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    upsert?: SubmissionUpsertWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestCasesInput, SubmissionUpdateWithoutTestCasesInput>, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    upsert?: UserUpsertWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemSolvedInput, UserUpdateWithoutProblemSolvedInput>, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    upsert?: ProblemUpsertWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedByInput, ProblemUpdateWithoutSolvedByInput>, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemsInPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemsInPlaylistCreateWithoutPlaylistInput[] | ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemsInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemsInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemsInPlaylistCreateWithoutPlaylistInput[] | ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemsInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
  }

  export type ProblemsInPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemsInPlaylistCreateWithoutPlaylistInput[] | ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemsInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemsInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemsInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    disconnect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    delete?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    update?: ProblemsInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemsInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemsInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemsInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type ProblemsInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemsInPlaylistCreateWithoutPlaylistInput[] | ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemsInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemsInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemsInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    disconnect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    delete?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    connect?: ProblemsInPlaylistWhereUniqueInput | ProblemsInPlaylistWhereUniqueInput[]
    update?: ProblemsInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemsInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemsInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemsInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemsPlaylistsInput = {
    create?: XOR<ProblemCreateWithoutProblemsPlaylistsInput, ProblemUncheckedCreateWithoutProblemsPlaylistsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlaylistsInput
    connect?: ProblemWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    upsert?: PlaylistUpsertWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutProblemsInput, PlaylistUpdateWithoutProblemsInput>, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemsPlaylistsInput, ProblemUncheckedCreateWithoutProblemsPlaylistsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlaylistsInput
    upsert?: ProblemUpsertWithoutProblemsPlaylistsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemsPlaylistsInput, ProblemUpdateWithoutProblemsPlaylistsInput>, ProblemUncheckedUpdateWithoutProblemsPlaylistsInput>
  }

  export type UserCreateNestedOneWithoutContestsCreatedInput = {
    create?: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ContestProblemCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput> | ContestProblemCreateWithoutContestInput[] | ContestProblemUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutContestInput | ContestProblemCreateOrConnectWithoutContestInput[]
    createMany?: ContestProblemCreateManyContestInputEnvelope
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
  }

  export type ContestRegistrationCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput> | ContestRegistrationCreateWithoutContestInput[] | ContestRegistrationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutContestInput | ContestRegistrationCreateOrConnectWithoutContestInput[]
    createMany?: ContestRegistrationCreateManyContestInputEnvelope
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
  }

  export type ContestSubmissionCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput> | ContestSubmissionCreateWithoutContestInput[] | ContestSubmissionUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutContestInput | ContestSubmissionCreateOrConnectWithoutContestInput[]
    createMany?: ContestSubmissionCreateManyContestInputEnvelope
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutContestInput = {
    create?: XOR<UserCreateWithoutContestInput, UserUncheckedCreateWithoutContestInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestInput
    connect?: UserWhereUniqueInput
  }

  export type ContestProblemUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput> | ContestProblemCreateWithoutContestInput[] | ContestProblemUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutContestInput | ContestProblemCreateOrConnectWithoutContestInput[]
    createMany?: ContestProblemCreateManyContestInputEnvelope
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
  }

  export type ContestRegistrationUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput> | ContestRegistrationCreateWithoutContestInput[] | ContestRegistrationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutContestInput | ContestRegistrationCreateOrConnectWithoutContestInput[]
    createMany?: ContestRegistrationCreateManyContestInputEnvelope
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
  }

  export type ContestSubmissionUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput> | ContestSubmissionCreateWithoutContestInput[] | ContestSubmissionUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutContestInput | ContestSubmissionCreateOrConnectWithoutContestInput[]
    createMany?: ContestSubmissionCreateManyContestInputEnvelope
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutContestsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsCreatedInput
    upsert?: UserUpsertWithoutContestsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestsCreatedInput, UserUpdateWithoutContestsCreatedInput>, UserUncheckedUpdateWithoutContestsCreatedInput>
  }

  export type ContestProblemUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput> | ContestProblemCreateWithoutContestInput[] | ContestProblemUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutContestInput | ContestProblemCreateOrConnectWithoutContestInput[]
    upsert?: ContestProblemUpsertWithWhereUniqueWithoutContestInput | ContestProblemUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestProblemCreateManyContestInputEnvelope
    set?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    disconnect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    delete?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    update?: ContestProblemUpdateWithWhereUniqueWithoutContestInput | ContestProblemUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestProblemUpdateManyWithWhereWithoutContestInput | ContestProblemUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
  }

  export type ContestRegistrationUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput> | ContestRegistrationCreateWithoutContestInput[] | ContestRegistrationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutContestInput | ContestRegistrationCreateOrConnectWithoutContestInput[]
    upsert?: ContestRegistrationUpsertWithWhereUniqueWithoutContestInput | ContestRegistrationUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestRegistrationCreateManyContestInputEnvelope
    set?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    disconnect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    delete?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    update?: ContestRegistrationUpdateWithWhereUniqueWithoutContestInput | ContestRegistrationUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestRegistrationUpdateManyWithWhereWithoutContestInput | ContestRegistrationUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
  }

  export type ContestSubmissionUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput> | ContestSubmissionCreateWithoutContestInput[] | ContestSubmissionUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutContestInput | ContestSubmissionCreateOrConnectWithoutContestInput[]
    upsert?: ContestSubmissionUpsertWithWhereUniqueWithoutContestInput | ContestSubmissionUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestSubmissionCreateManyContestInputEnvelope
    set?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    disconnect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    delete?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    update?: ContestSubmissionUpdateWithWhereUniqueWithoutContestInput | ContestSubmissionUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestSubmissionUpdateManyWithWhereWithoutContestInput | ContestSubmissionUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutContestNestedInput = {
    create?: XOR<UserCreateWithoutContestInput, UserUncheckedCreateWithoutContestInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestInput
    upsert?: UserUpsertWithoutContestInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestInput, UserUpdateWithoutContestInput>, UserUncheckedUpdateWithoutContestInput>
  }

  export type ContestProblemUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput> | ContestProblemCreateWithoutContestInput[] | ContestProblemUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestProblemCreateOrConnectWithoutContestInput | ContestProblemCreateOrConnectWithoutContestInput[]
    upsert?: ContestProblemUpsertWithWhereUniqueWithoutContestInput | ContestProblemUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestProblemCreateManyContestInputEnvelope
    set?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    disconnect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    delete?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    connect?: ContestProblemWhereUniqueInput | ContestProblemWhereUniqueInput[]
    update?: ContestProblemUpdateWithWhereUniqueWithoutContestInput | ContestProblemUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestProblemUpdateManyWithWhereWithoutContestInput | ContestProblemUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
  }

  export type ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput> | ContestRegistrationCreateWithoutContestInput[] | ContestRegistrationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestRegistrationCreateOrConnectWithoutContestInput | ContestRegistrationCreateOrConnectWithoutContestInput[]
    upsert?: ContestRegistrationUpsertWithWhereUniqueWithoutContestInput | ContestRegistrationUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestRegistrationCreateManyContestInputEnvelope
    set?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    disconnect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    delete?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    connect?: ContestRegistrationWhereUniqueInput | ContestRegistrationWhereUniqueInput[]
    update?: ContestRegistrationUpdateWithWhereUniqueWithoutContestInput | ContestRegistrationUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestRegistrationUpdateManyWithWhereWithoutContestInput | ContestRegistrationUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
  }

  export type ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput> | ContestSubmissionCreateWithoutContestInput[] | ContestSubmissionUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestSubmissionCreateOrConnectWithoutContestInput | ContestSubmissionCreateOrConnectWithoutContestInput[]
    upsert?: ContestSubmissionUpsertWithWhereUniqueWithoutContestInput | ContestSubmissionUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestSubmissionCreateManyContestInputEnvelope
    set?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    disconnect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    delete?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    connect?: ContestSubmissionWhereUniqueInput | ContestSubmissionWhereUniqueInput[]
    update?: ContestSubmissionUpdateWithWhereUniqueWithoutContestInput | ContestSubmissionUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestSubmissionUpdateManyWithWhereWithoutContestInput | ContestSubmissionUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
  }

  export type ContestCreateNestedOneWithoutProblemsInput = {
    create?: XOR<ContestCreateWithoutProblemsInput, ContestUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutProblemsInput
    connect?: ContestWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutContestProblemsInput = {
    create?: XOR<ProblemCreateWithoutContestProblemsInput, ProblemUncheckedCreateWithoutContestProblemsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutContestProblemsInput
    connect?: ProblemWhereUniqueInput
  }

  export type ContestUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<ContestCreateWithoutProblemsInput, ContestUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutProblemsInput
    upsert?: ContestUpsertWithoutProblemsInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutProblemsInput, ContestUpdateWithoutProblemsInput>, ContestUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutContestProblemsNestedInput = {
    create?: XOR<ProblemCreateWithoutContestProblemsInput, ProblemUncheckedCreateWithoutContestProblemsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutContestProblemsInput
    upsert?: ProblemUpsertWithoutContestProblemsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutContestProblemsInput, ProblemUpdateWithoutContestProblemsInput>, ProblemUncheckedUpdateWithoutContestProblemsInput>
  }

  export type UserCreateNestedOneWithoutContestRegistrationsInput = {
    create?: XOR<UserCreateWithoutContestRegistrationsInput, UserUncheckedCreateWithoutContestRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<ContestCreateWithoutRegistrationsInput, ContestUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutRegistrationsInput
    connect?: ContestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContestRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutContestRegistrationsInput, UserUncheckedCreateWithoutContestRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestRegistrationsInput
    upsert?: UserUpsertWithoutContestRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestRegistrationsInput, UserUpdateWithoutContestRegistrationsInput>, UserUncheckedUpdateWithoutContestRegistrationsInput>
  }

  export type ContestUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<ContestCreateWithoutRegistrationsInput, ContestUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutRegistrationsInput
    upsert?: ContestUpsertWithoutRegistrationsInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutRegistrationsInput, ContestUpdateWithoutRegistrationsInput>, ContestUncheckedUpdateWithoutRegistrationsInput>
  }

  export type ContestCreateNestedOneWithoutContestSubmissionsInput = {
    create?: XOR<ContestCreateWithoutContestSubmissionsInput, ContestUncheckedCreateWithoutContestSubmissionsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutContestSubmissionsInput
    connect?: ContestWhereUniqueInput
  }

  export type SubmissionCreateNestedOneWithoutContestSubmissionInput = {
    create?: XOR<SubmissionCreateWithoutContestSubmissionInput, SubmissionUncheckedCreateWithoutContestSubmissionInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestSubmissionInput
    connect?: SubmissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContestSubmissionsInput = {
    create?: XOR<UserCreateWithoutContestSubmissionsInput, UserUncheckedCreateWithoutContestSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestUpdateOneRequiredWithoutContestSubmissionsNestedInput = {
    create?: XOR<ContestCreateWithoutContestSubmissionsInput, ContestUncheckedCreateWithoutContestSubmissionsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutContestSubmissionsInput
    upsert?: ContestUpsertWithoutContestSubmissionsInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutContestSubmissionsInput, ContestUpdateWithoutContestSubmissionsInput>, ContestUncheckedUpdateWithoutContestSubmissionsInput>
  }

  export type SubmissionUpdateOneRequiredWithoutContestSubmissionNestedInput = {
    create?: XOR<SubmissionCreateWithoutContestSubmissionInput, SubmissionUncheckedCreateWithoutContestSubmissionInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestSubmissionInput
    upsert?: SubmissionUpsertWithoutContestSubmissionInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutContestSubmissionInput, SubmissionUpdateWithoutContestSubmissionInput>, SubmissionUncheckedUpdateWithoutContestSubmissionInput>
  }

  export type UserUpdateOneWithoutContestSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutContestSubmissionsInput, UserUncheckedCreateWithoutContestSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestSubmissionsInput
    upsert?: UserUpsertWithoutContestSubmissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestSubmissionsInput, UserUpdateWithoutContestSubmissionsInput>, UserUncheckedUpdateWithoutContestSubmissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedCreateManyUserInputEnvelope = {
    data: ProblemSolvedCreateManyUserInput | ProblemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    problems?: ProblemsInPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    problems?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDailyActivityCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDailyActivityUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDailyActivityCreateOrConnectWithoutUserInput = {
    where: UserDailyActivityWhereUniqueInput
    create: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput>
  }

  export type UserDailyActivityCreateManyUserInputEnvelope = {
    data: UserDailyActivityCreateManyUserInput | UserDailyActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestRegistrationCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    contest: ContestCreateNestedOneWithoutRegistrationsInput
  }

  export type ContestRegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    contestId: string
    joinedAt?: Date | string
  }

  export type ContestRegistrationCreateOrConnectWithoutUserInput = {
    where: ContestRegistrationWhereUniqueInput
    create: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput>
  }

  export type ContestRegistrationCreateManyUserInputEnvelope = {
    data: ContestRegistrationCreateManyUserInput | ContestRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestSubmissionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    contest: ContestCreateNestedOneWithoutContestSubmissionsInput
    submission: SubmissionCreateNestedOneWithoutContestSubmissionInput
  }

  export type ContestSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    contestId: string
    submissionId: string
    createdAt?: Date | string
  }

  export type ContestSubmissionCreateOrConnectWithoutUserInput = {
    where: ContestSubmissionWhereUniqueInput
    create: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ContestSubmissionCreateManyUserInputEnvelope = {
    data: ContestSubmissionCreateManyUserInput | ContestSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ContestProblemCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutContestInput
    User?: UserCreateNestedOneWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    problems?: ContestProblemUncheckedCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationUncheckedCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput>
  }

  export type ContestCreateManyCreatorInputEnvelope = {
    data: ContestCreateManyCreatorInput | ContestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ContestCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    problems?: ContestProblemCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ContestProblemUncheckedCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationUncheckedCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutUserInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput>
  }

  export type ContestCreateManyUserInputEnvelope = {
    data: ContestCreateManyUserInput | ContestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    companies?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorials?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemSolvedScalarWhereInput = {
    AND?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    OR?: ProblemSolvedScalarWhereInput[]
    NOT?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    isPublic?: BoolFilter<"Playlist"> | boolean
  }

  export type UserDailyActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDailyActivityWhereUniqueInput
    update: XOR<UserDailyActivityUpdateWithoutUserInput, UserDailyActivityUncheckedUpdateWithoutUserInput>
    create: XOR<UserDailyActivityCreateWithoutUserInput, UserDailyActivityUncheckedCreateWithoutUserInput>
  }

  export type UserDailyActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDailyActivityWhereUniqueInput
    data: XOR<UserDailyActivityUpdateWithoutUserInput, UserDailyActivityUncheckedUpdateWithoutUserInput>
  }

  export type UserDailyActivityUpdateManyWithWhereWithoutUserInput = {
    where: UserDailyActivityScalarWhereInput
    data: XOR<UserDailyActivityUpdateManyMutationInput, UserDailyActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDailyActivityScalarWhereInput = {
    AND?: UserDailyActivityScalarWhereInput | UserDailyActivityScalarWhereInput[]
    OR?: UserDailyActivityScalarWhereInput[]
    NOT?: UserDailyActivityScalarWhereInput | UserDailyActivityScalarWhereInput[]
    id?: StringFilter<"UserDailyActivity"> | string
    userId?: StringFilter<"UserDailyActivity"> | string
    date?: DateTimeFilter<"UserDailyActivity"> | Date | string
    createdAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"UserDailyActivity"> | Date | string
  }

  export type ContestRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: ContestRegistrationWhereUniqueInput
    update: XOR<ContestRegistrationUpdateWithoutUserInput, ContestRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<ContestRegistrationCreateWithoutUserInput, ContestRegistrationUncheckedCreateWithoutUserInput>
  }

  export type ContestRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: ContestRegistrationWhereUniqueInput
    data: XOR<ContestRegistrationUpdateWithoutUserInput, ContestRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type ContestRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: ContestRegistrationScalarWhereInput
    data: XOR<ContestRegistrationUpdateManyMutationInput, ContestRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type ContestRegistrationScalarWhereInput = {
    AND?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
    OR?: ContestRegistrationScalarWhereInput[]
    NOT?: ContestRegistrationScalarWhereInput | ContestRegistrationScalarWhereInput[]
    id?: StringFilter<"ContestRegistration"> | string
    userId?: StringFilter<"ContestRegistration"> | string
    contestId?: StringFilter<"ContestRegistration"> | string
    joinedAt?: DateTimeFilter<"ContestRegistration"> | Date | string
  }

  export type ContestSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: ContestSubmissionWhereUniqueInput
    update: XOR<ContestSubmissionUpdateWithoutUserInput, ContestSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<ContestSubmissionCreateWithoutUserInput, ContestSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ContestSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: ContestSubmissionWhereUniqueInput
    data: XOR<ContestSubmissionUpdateWithoutUserInput, ContestSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type ContestSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: ContestSubmissionScalarWhereInput
    data: XOR<ContestSubmissionUpdateManyMutationInput, ContestSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type ContestSubmissionScalarWhereInput = {
    AND?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
    OR?: ContestSubmissionScalarWhereInput[]
    NOT?: ContestSubmissionScalarWhereInput | ContestSubmissionScalarWhereInput[]
    id?: StringFilter<"ContestSubmission"> | string
    contestId?: StringFilter<"ContestSubmission"> | string
    submissionId?: StringFilter<"ContestSubmission"> | string
    createdAt?: DateTimeFilter<"ContestSubmission"> | Date | string
    userId?: StringNullableFilter<"ContestSubmission"> | string | null
  }

  export type ContestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    update: XOR<ContestUpdateWithoutCreatorInput, ContestUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput>
  }

  export type ContestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    data: XOR<ContestUpdateWithoutCreatorInput, ContestUncheckedUpdateWithoutCreatorInput>
  }

  export type ContestUpdateManyWithWhereWithoutCreatorInput = {
    where: ContestScalarWhereInput
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContestScalarWhereInput = {
    AND?: ContestScalarWhereInput | ContestScalarWhereInput[]
    OR?: ContestScalarWhereInput[]
    NOT?: ContestScalarWhereInput | ContestScalarWhereInput[]
    id?: StringFilter<"Contest"> | string
    title?: StringFilter<"Contest"> | string
    description?: StringNullableFilter<"Contest"> | string | null
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    createdBy?: StringFilter<"Contest"> | string
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    updatedAt?: DateTimeFilter<"Contest"> | Date | string
    userId?: StringNullableFilter<"Contest"> | string | null
  }

  export type ContestUpsertWithWhereUniqueWithoutUserInput = {
    where: ContestWhereUniqueInput
    update: XOR<ContestUpdateWithoutUserInput, ContestUncheckedUpdateWithoutUserInput>
    create: XOR<ContestCreateWithoutUserInput, ContestUncheckedCreateWithoutUserInput>
  }

  export type ContestUpdateWithWhereUniqueWithoutUserInput = {
    where: ContestWhereUniqueInput
    data: XOR<ContestUpdateWithoutUserInput, ContestUncheckedUpdateWithoutUserInput>
  }

  export type ContestUpdateManyWithWhereWithoutUserInput = {
    where: ContestScalarWhereInput
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutDailyActivitiesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyActivitiesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
  }

  export type UserUpsertWithoutDailyActivitiesInput = {
    update: XOR<UserUpdateWithoutDailyActivitiesInput, UserUncheckedUpdateWithoutDailyActivitiesInput>
    create: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyActivitiesInput, UserUncheckedUpdateWithoutDailyActivitiesInput>
  }

  export type UserUpdateWithoutDailyActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
    contestSubmission?: ContestSubmissionUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type ProblemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedCreateManyProblemInputEnvelope = {
    data: ProblemSolvedCreateManyProblemInput | ProblemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemsInPlaylistCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
  }

  export type ProblemsInPlaylistUncheckedCreateWithoutProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistCreateOrConnectWithoutProblemInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    create: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemsInPlaylistCreateManyProblemInputEnvelope = {
    data: ProblemsInPlaylistCreateManyProblemInput | ProblemsInPlaylistCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ContestProblemCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contest: ContestCreateNestedOneWithoutProblemsInput
  }

  export type ContestProblemUncheckedCreateWithoutProblemInput = {
    id?: string
    contestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestProblemCreateOrConnectWithoutProblemInput = {
    where: ContestProblemWhereUniqueInput
    create: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput>
  }

  export type ContestProblemCreateManyProblemInputEnvelope = {
    data: ContestProblemCreateManyProblemInput | ContestProblemCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemsInPlaylistUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    update: XOR<ProblemsInPlaylistUpdateWithoutProblemInput, ProblemsInPlaylistUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemsInPlaylistCreateWithoutProblemInput, ProblemsInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemsInPlaylistUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    data: XOR<ProblemsInPlaylistUpdateWithoutProblemInput, ProblemsInPlaylistUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemsInPlaylistUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemsInPlaylistScalarWhereInput
    data: XOR<ProblemsInPlaylistUpdateManyMutationInput, ProblemsInPlaylistUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemsInPlaylistScalarWhereInput = {
    AND?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
    OR?: ProblemsInPlaylistScalarWhereInput[]
    NOT?: ProblemsInPlaylistScalarWhereInput | ProblemsInPlaylistScalarWhereInput[]
    id?: StringFilter<"ProblemsInPlaylist"> | string
    playlistId?: StringFilter<"ProblemsInPlaylist"> | string
    problemId?: StringFilter<"ProblemsInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsInPlaylist"> | Date | string
  }

  export type ContestProblemUpsertWithWhereUniqueWithoutProblemInput = {
    where: ContestProblemWhereUniqueInput
    update: XOR<ContestProblemUpdateWithoutProblemInput, ContestProblemUncheckedUpdateWithoutProblemInput>
    create: XOR<ContestProblemCreateWithoutProblemInput, ContestProblemUncheckedCreateWithoutProblemInput>
  }

  export type ContestProblemUpdateWithWhereUniqueWithoutProblemInput = {
    where: ContestProblemWhereUniqueInput
    data: XOR<ContestProblemUpdateWithoutProblemInput, ContestProblemUncheckedUpdateWithoutProblemInput>
  }

  export type ContestProblemUpdateManyWithWhereWithoutProblemInput = {
    where: ContestProblemScalarWhereInput
    data: XOR<ContestProblemUpdateManyMutationInput, ContestProblemUncheckedUpdateManyWithoutProblemInput>
  }

  export type ContestProblemScalarWhereInput = {
    AND?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
    OR?: ContestProblemScalarWhereInput[]
    NOT?: ContestProblemScalarWhereInput | ContestProblemScalarWhereInput[]
    id?: StringFilter<"ContestProblem"> | string
    contestId?: StringFilter<"ContestProblem"> | string
    problemId?: StringFilter<"ContestProblem"> | string
    createdAt?: DateTimeFilter<"ContestProblem"> | Date | string
    updatedAt?: DateTimeFilter<"ContestProblem"> | Date | string
  }

  export type UserCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultCreateOrConnectWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateManySubmissionInputEnvelope = {
    data: TestCaseResultCreateManySubmissionInput | TestCaseResultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type ContestSubmissionCreateWithoutSubmissionInput = {
    id?: string
    createdAt?: Date | string
    contest: ContestCreateNestedOneWithoutContestSubmissionsInput
    User?: UserCreateNestedOneWithoutContestSubmissionsInput
  }

  export type ContestSubmissionUncheckedCreateWithoutSubmissionInput = {
    id?: string
    contestId: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ContestSubmissionCreateOrConnectWithoutSubmissionInput = {
    where: ContestSubmissionWhereUniqueInput
    create: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    update: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    data: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestCaseResultScalarWhereInput
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestCaseResultScalarWhereInput = {
    AND?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    OR?: TestCaseResultScalarWhereInput[]
    NOT?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
  }

  export type ContestSubmissionUpsertWithoutSubmissionInput = {
    update: XOR<ContestSubmissionUpdateWithoutSubmissionInput, ContestSubmissionUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ContestSubmissionCreateWithoutSubmissionInput, ContestSubmissionUncheckedCreateWithoutSubmissionInput>
    where?: ContestSubmissionWhereInput
  }

  export type ContestSubmissionUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ContestSubmissionWhereInput
    data: XOR<ContestSubmissionUpdateWithoutSubmissionInput, ContestSubmissionUncheckedUpdateWithoutSubmissionInput>
  }

  export type ContestSubmissionUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutContestSubmissionsNestedInput
    User?: UserUpdateOneWithoutContestSubmissionsNestedInput
  }

  export type ContestSubmissionUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionCreateWithoutTestCasesInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    contestSubmission?: ContestSubmissionCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTestCasesInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contestSubmission?: ContestSubmissionUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutTestCasesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
  }

  export type SubmissionUpsertWithoutTestCasesInput = {
    update: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type SubmissionUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestSubmission?: ContestSubmissionUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
  }

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
  }

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemsInPlaylistCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemsPlaylistsInput
  }

  export type ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    create: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemsInPlaylistCreateManyPlaylistInputEnvelope = {
    data: ProblemsInPlaylistCreateManyPlaylistInput | ProblemsInPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type ProblemsInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    update: XOR<ProblemsInPlaylistUpdateWithoutPlaylistInput, ProblemsInPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ProblemsInPlaylistCreateWithoutPlaylistInput, ProblemsInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemsInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemsInPlaylistWhereUniqueInput
    data: XOR<ProblemsInPlaylistUpdateWithoutPlaylistInput, ProblemsInPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type ProblemsInPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: ProblemsInPlaylistScalarWhereInput
    data: XOR<ProblemsInPlaylistUpdateManyMutationInput, ProblemsInPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
  }

  export type PlaylistCreateOrConnectWithoutProblemsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemsPlaylistsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemsPlaylistsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    contestProblems?: ContestProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemsPlaylistsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemsPlaylistsInput, ProblemUncheckedCreateWithoutProblemsPlaylistsInput>
  }

  export type PlaylistUpsertWithoutProblemsInput = {
    update: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type PlaylistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProblemUpsertWithoutProblemsPlaylistsInput = {
    update: XOR<ProblemUpdateWithoutProblemsPlaylistsInput, ProblemUncheckedUpdateWithoutProblemsPlaylistsInput>
    create: XOR<ProblemCreateWithoutProblemsPlaylistsInput, ProblemUncheckedCreateWithoutProblemsPlaylistsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemsPlaylistsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemsPlaylistsInput, ProblemUncheckedUpdateWithoutProblemsPlaylistsInput>
  }

  export type ProblemUpdateWithoutProblemsPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemsPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserCreateWithoutContestsCreatedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContestsCreatedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContestsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
  }

  export type ContestProblemCreateWithoutContestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutContestProblemsInput
  }

  export type ContestProblemUncheckedCreateWithoutContestInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestProblemCreateOrConnectWithoutContestInput = {
    where: ContestProblemWhereUniqueInput
    create: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput>
  }

  export type ContestProblemCreateManyContestInputEnvelope = {
    data: ContestProblemCreateManyContestInput | ContestProblemCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type ContestRegistrationCreateWithoutContestInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutContestRegistrationsInput
  }

  export type ContestRegistrationUncheckedCreateWithoutContestInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type ContestRegistrationCreateOrConnectWithoutContestInput = {
    where: ContestRegistrationWhereUniqueInput
    create: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput>
  }

  export type ContestRegistrationCreateManyContestInputEnvelope = {
    data: ContestRegistrationCreateManyContestInput | ContestRegistrationCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type ContestSubmissionCreateWithoutContestInput = {
    id?: string
    createdAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutContestSubmissionInput
    User?: UserCreateNestedOneWithoutContestSubmissionsInput
  }

  export type ContestSubmissionUncheckedCreateWithoutContestInput = {
    id?: string
    submissionId: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ContestSubmissionCreateOrConnectWithoutContestInput = {
    where: ContestSubmissionWhereUniqueInput
    create: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput>
  }

  export type ContestSubmissionCreateManyContestInputEnvelope = {
    data: ContestSubmissionCreateManyContestInput | ContestSubmissionCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutContestInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutContestInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutContestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestInput, UserUncheckedCreateWithoutContestInput>
  }

  export type UserUpsertWithoutContestsCreatedInput = {
    update: XOR<UserUpdateWithoutContestsCreatedInput, UserUncheckedUpdateWithoutContestsCreatedInput>
    create: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestsCreatedInput, UserUncheckedUpdateWithoutContestsCreatedInput>
  }

  export type UserUpdateWithoutContestsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContestsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestProblemUpsertWithWhereUniqueWithoutContestInput = {
    where: ContestProblemWhereUniqueInput
    update: XOR<ContestProblemUpdateWithoutContestInput, ContestProblemUncheckedUpdateWithoutContestInput>
    create: XOR<ContestProblemCreateWithoutContestInput, ContestProblemUncheckedCreateWithoutContestInput>
  }

  export type ContestProblemUpdateWithWhereUniqueWithoutContestInput = {
    where: ContestProblemWhereUniqueInput
    data: XOR<ContestProblemUpdateWithoutContestInput, ContestProblemUncheckedUpdateWithoutContestInput>
  }

  export type ContestProblemUpdateManyWithWhereWithoutContestInput = {
    where: ContestProblemScalarWhereInput
    data: XOR<ContestProblemUpdateManyMutationInput, ContestProblemUncheckedUpdateManyWithoutContestInput>
  }

  export type ContestRegistrationUpsertWithWhereUniqueWithoutContestInput = {
    where: ContestRegistrationWhereUniqueInput
    update: XOR<ContestRegistrationUpdateWithoutContestInput, ContestRegistrationUncheckedUpdateWithoutContestInput>
    create: XOR<ContestRegistrationCreateWithoutContestInput, ContestRegistrationUncheckedCreateWithoutContestInput>
  }

  export type ContestRegistrationUpdateWithWhereUniqueWithoutContestInput = {
    where: ContestRegistrationWhereUniqueInput
    data: XOR<ContestRegistrationUpdateWithoutContestInput, ContestRegistrationUncheckedUpdateWithoutContestInput>
  }

  export type ContestRegistrationUpdateManyWithWhereWithoutContestInput = {
    where: ContestRegistrationScalarWhereInput
    data: XOR<ContestRegistrationUpdateManyMutationInput, ContestRegistrationUncheckedUpdateManyWithoutContestInput>
  }

  export type ContestSubmissionUpsertWithWhereUniqueWithoutContestInput = {
    where: ContestSubmissionWhereUniqueInput
    update: XOR<ContestSubmissionUpdateWithoutContestInput, ContestSubmissionUncheckedUpdateWithoutContestInput>
    create: XOR<ContestSubmissionCreateWithoutContestInput, ContestSubmissionUncheckedCreateWithoutContestInput>
  }

  export type ContestSubmissionUpdateWithWhereUniqueWithoutContestInput = {
    where: ContestSubmissionWhereUniqueInput
    data: XOR<ContestSubmissionUpdateWithoutContestInput, ContestSubmissionUncheckedUpdateWithoutContestInput>
  }

  export type ContestSubmissionUpdateManyWithWhereWithoutContestInput = {
    where: ContestSubmissionScalarWhereInput
    data: XOR<ContestSubmissionUpdateManyMutationInput, ContestSubmissionUncheckedUpdateManyWithoutContestInput>
  }

  export type UserUpsertWithoutContestInput = {
    update: XOR<UserUpdateWithoutContestInput, UserUncheckedUpdateWithoutContestInput>
    create: XOR<UserCreateWithoutContestInput, UserUncheckedCreateWithoutContestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestInput, UserUncheckedUpdateWithoutContestInput>
  }

  export type UserUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ContestCreateWithoutProblemsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    registrations?: ContestRegistrationCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutContestInput
    User?: UserCreateNestedOneWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutProblemsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    registrations?: ContestRegistrationUncheckedCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutProblemsInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutProblemsInput, ContestUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutContestProblemsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutContestProblemsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutContestProblemsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutContestProblemsInput, ProblemUncheckedCreateWithoutContestProblemsInput>
  }

  export type ContestUpsertWithoutProblemsInput = {
    update: XOR<ContestUpdateWithoutProblemsInput, ContestUncheckedUpdateWithoutProblemsInput>
    create: XOR<ContestCreateWithoutProblemsInput, ContestUncheckedCreateWithoutProblemsInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutProblemsInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutProblemsInput, ContestUncheckedUpdateWithoutProblemsInput>
  }

  export type ContestUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    registrations?: ContestRegistrationUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutContestNestedInput
    User?: UserUpdateOneWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ProblemUpsertWithoutContestProblemsInput = {
    update: XOR<ProblemUpdateWithoutContestProblemsInput, ProblemUncheckedUpdateWithoutContestProblemsInput>
    create: XOR<ProblemCreateWithoutContestProblemsInput, ProblemUncheckedCreateWithoutContestProblemsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutContestProblemsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutContestProblemsInput, ProblemUncheckedUpdateWithoutContestProblemsInput>
  }

  export type ProblemUpdateWithoutContestProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutContestProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserCreateWithoutContestRegistrationsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContestRegistrationsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContestRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestRegistrationsInput, UserUncheckedCreateWithoutContestRegistrationsInput>
  }

  export type ContestCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    problems?: ContestProblemCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionCreateNestedManyWithoutContestInput
    User?: UserCreateNestedOneWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    problems?: ContestProblemUncheckedCreateNestedManyWithoutContestInput
    contestSubmissions?: ContestSubmissionUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutRegistrationsInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutRegistrationsInput, ContestUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserUpsertWithoutContestRegistrationsInput = {
    update: XOR<UserUpdateWithoutContestRegistrationsInput, UserUncheckedUpdateWithoutContestRegistrationsInput>
    create: XOR<UserCreateWithoutContestRegistrationsInput, UserUncheckedCreateWithoutContestRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestRegistrationsInput, UserUncheckedUpdateWithoutContestRegistrationsInput>
  }

  export type UserUpdateWithoutContestRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContestRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestUpsertWithoutRegistrationsInput = {
    update: XOR<ContestUpdateWithoutRegistrationsInput, ContestUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<ContestCreateWithoutRegistrationsInput, ContestUncheckedCreateWithoutRegistrationsInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutRegistrationsInput, ContestUncheckedUpdateWithoutRegistrationsInput>
  }

  export type ContestUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    problems?: ContestProblemUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutContestNestedInput
    User?: UserUpdateOneWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ContestProblemUncheckedUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateWithoutContestSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    problems?: ContestProblemCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationCreateNestedManyWithoutContestInput
    User?: UserCreateNestedOneWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutContestSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    problems?: ContestProblemUncheckedCreateNestedManyWithoutContestInput
    registrations?: ContestRegistrationUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutContestSubmissionsInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutContestSubmissionsInput, ContestUncheckedCreateWithoutContestSubmissionsInput>
  }

  export type SubmissionCreateWithoutContestSubmissionInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutContestSubmissionInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutContestSubmissionInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutContestSubmissionInput, SubmissionUncheckedCreateWithoutContestSubmissionInput>
  }

  export type UserCreateWithoutContestSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationCreateNestedManyWithoutUserInput
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    contest?: ContestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContestSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    isBlocked?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpires?: Date | string | null
    plan?: $Enums.PlanType
    subscriptionExpires?: Date | string | null
    lastActivityDate?: Date | string | null
    currentStreak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: UserDailyActivityUncheckedCreateNestedManyWithoutUserInput
    contestRegistrations?: ContestRegistrationUncheckedCreateNestedManyWithoutUserInput
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    contest?: ContestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContestSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestSubmissionsInput, UserUncheckedCreateWithoutContestSubmissionsInput>
  }

  export type ContestUpsertWithoutContestSubmissionsInput = {
    update: XOR<ContestUpdateWithoutContestSubmissionsInput, ContestUncheckedUpdateWithoutContestSubmissionsInput>
    create: XOR<ContestCreateWithoutContestSubmissionsInput, ContestUncheckedCreateWithoutContestSubmissionsInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutContestSubmissionsInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutContestSubmissionsInput, ContestUncheckedUpdateWithoutContestSubmissionsInput>
  }

  export type ContestUpdateWithoutContestSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    problems?: ContestProblemUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUpdateManyWithoutContestNestedInput
    User?: UserUpdateOneWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutContestSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ContestProblemUncheckedUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput
  }

  export type SubmissionUpsertWithoutContestSubmissionInput = {
    update: XOR<SubmissionUpdateWithoutContestSubmissionInput, SubmissionUncheckedUpdateWithoutContestSubmissionInput>
    create: XOR<SubmissionCreateWithoutContestSubmissionInput, SubmissionUncheckedCreateWithoutContestSubmissionInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutContestSubmissionInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutContestSubmissionInput, SubmissionUncheckedUpdateWithoutContestSubmissionInput>
  }

  export type SubmissionUpdateWithoutContestSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutContestSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type UserUpsertWithoutContestSubmissionsInput = {
    update: XOR<UserUpdateWithoutContestSubmissionsInput, UserUncheckedUpdateWithoutContestSubmissionsInput>
    create: XOR<UserCreateWithoutContestSubmissionsInput, UserUncheckedCreateWithoutContestSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestSubmissionsInput, UserUncheckedUpdateWithoutContestSubmissionsInput>
  }

  export type UserUpdateWithoutContestSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    contest?: ContestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContestSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: UserDailyActivityUncheckedUpdateManyWithoutUserNestedInput
    contestRegistrations?: ContestRegistrationUncheckedUpdateManyWithoutUserNestedInput
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    contest?: ContestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    companies?: ProblemCreatecompaniesInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorials?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
  }

  export type UserDailyActivityCreateManyUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestRegistrationCreateManyUserInput = {
    id?: string
    contestId: string
    joinedAt?: Date | string
  }

  export type ContestSubmissionCreateManyUserInput = {
    id?: string
    contestId: string
    submissionId: string
    createdAt?: Date | string
  }

  export type ContestCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ContestCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: ProblemsInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    contestProblems?: ContestProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    companies?: ProblemUpdatecompaniesInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorials?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    problems?: ProblemsInPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    problems?: ProblemsInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserDailyActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDailyActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDailyActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type ContestRegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutContestSubmissionsNestedInput
    submission?: SubmissionUpdateOneRequiredWithoutContestSubmissionNestedInput
  }

  export type ContestSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ContestProblemUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutContestNestedInput
    User?: UserUpdateOneWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ContestProblemUncheckedUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    problems?: ContestProblemUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ContestProblemUncheckedUpdateManyWithoutContestNestedInput
    registrations?: ContestRegistrationUncheckedUpdateManyWithoutContestNestedInput
    contestSubmissions?: ContestSubmissionUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistCreateManyProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestProblemCreateManyProblemInput = {
    id?: string
    contestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
    contestSubmission?: ContestSubmissionUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemsInPlaylistUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ContestProblemUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistCreateManyPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsInPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput
  }

  export type ProblemsInPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsInPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemCreateManyContestInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestRegistrationCreateManyContestInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type ContestSubmissionCreateManyContestInput = {
    id?: string
    submissionId: string
    createdAt?: Date | string
    userId?: string | null
  }

  export type ContestProblemUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutContestProblemsNestedInput
  }

  export type ContestProblemUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestProblemUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestRegistrationsNestedInput
  }

  export type ContestRegistrationUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestRegistrationUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestSubmissionUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutContestSubmissionNestedInput
    User?: UserUpdateOneWithoutContestSubmissionsNestedInput
  }

  export type ContestSubmissionUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContestSubmissionUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}