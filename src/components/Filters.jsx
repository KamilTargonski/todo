function Filters({filters, setFilters}) {
    return (
        <section className="filters">
            <button className={filters === 'all' ? 'filter_active' : ''} onClick={() => setFilters('all')}>All</button>
            <button className={filters === false ? 'filter_active' : ''} onClick={() => setFilters(false)}>Active</button>
            <button className={filters === true ? 'filter_active' : ''} onClick={() => setFilters(true)}>Completed</button>
        </section>
    )
}

export default Filters;