import PropTypes from 'prop-types'

function Breadcrumbs({children}){
    const arr = Array.from(children);
    return(
        <section className=" px-[2rem]">
            <div className="tw-container py-8 md:py-16 bg-inherit">
            {
                arr.map((child, i) => (
                    <span key={i} className={`text-l bg-inherit md:text-xl lg:text-2xl tracking-wider font-bold capitalize ${arr.length - 1 !== i ? 'text-amber-600' : 'text-amber-800'}`}>
                        {child}{(arr.length - 1) !== i ? ' / ' : ''}
                    </span>
                ))
            }
            </div>
        </section>
    );
}

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired
}

export default Breadcrumbs