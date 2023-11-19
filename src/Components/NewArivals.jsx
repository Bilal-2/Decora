import Card from './Card'

export default function NewArivals() {
    return (
        <div>
            <div className='mt-12 pl-8 flex flex-col items-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-center'>
                    New Arrivals
                </h1>
                <p className='mt-1 text-sm sm:text-base md:text-lg lg:text-xl text-black  text-center'>
                    Sitewide Discounts & Savings Of Up To 25%
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}
