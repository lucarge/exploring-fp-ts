import { Semigroup } from "fp-ts/lib/Semigroup";

export const stringConcatSemi: Semigroup<string> = {
  concat: (x, y) => x + y,
}

export const boolAndSemi: Semigroup<boolean> = {
  concat: (x, y) => x && y,
}

export const boolOrSemi: Semigroup<boolean> = {
  concat: (x, y) => x || y,
}

export const objectSpreadSemi: Semigroup<object> = {
  concat: (x, y) => ({ ...x, ...y }),
}

type Predicate<A> = (a: A) => boolean

const fold = <A>(S: Semigroup<A>) => (a: A, as: Array<A>): A => as.reduce((a, b) => S.concat(a, b), a)

export const every = <A>(p: Predicate<A>, as: Array<A>): boolean => fold(boolAndSemi)(true, as.map(p))

export const some = <A>(p: Predicate<A>, as: Array<A>): boolean => fold(boolOrSemi)(false, as.map(p))
