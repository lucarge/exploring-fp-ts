import { Either, fold, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

export const bimap = <L, V, A, B>(
  fla: Either<L, A>,
  f: (l: L) => V,
  g: (a: A) => B,
): Either<V, B> => pipe(
  fla,
  fold(l => left(f(l)), r => right(g(r))),
)
