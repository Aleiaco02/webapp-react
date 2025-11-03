import FilmCard from "../components/FilmCard"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Boolflix</h1>
            <div className="row row-cols-3 mt-4">
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
            </div>
        </>
    )
}

export default HomePage