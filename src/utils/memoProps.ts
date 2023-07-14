export function memoProps(prevMovie: any, nextMovie: any) {
	return prevMovie.state === nextMovie.state
    && prevMovie.data === nextMovie.data;}
