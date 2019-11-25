type Predicate<A> = (a: A) => boolean

/**
 * @example
 * ```
 * const isAdult: Predicate<number> = age => age >= 18
 *
 * interface Person {
 *   age: number
 *   name: string
 * }
 *
 * const isPersonAdult: Predicate<Person> = contramap(p => p.age, isAdult)
 * 
 * isPersonAdult({ name: 'Luca', age: 5 }) // false
 * ```
 */
export const contramap = <A, B>(f: (b: B) => A, predicate: Predicate<A>): Predicate<B> => {
  return b => predicate(f(b))
}
