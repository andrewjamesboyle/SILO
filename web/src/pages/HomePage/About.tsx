export default function About() {
  return (
    <div id="about" className="bg-none py-24 sm:py-32 h-full w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 z-10 backdrop-blur p-4">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            About{' '}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            We have sourced the public GIS data, at the Federal, State and
            County levels, that is often used for project / land planning,
            analysis and development feasibility and compiled it into a single
            database. The common current workflow of viewing data layers to
            having the desired data imported into the end users cad software is
            disjointed, and unnecessarily time consuming. We have streamlined
            this workflow all while maintaining the native projections of the
            publicly sourced data and allowing users the opportunity to create
            their own data in the webmap (desktop and mobile) or upload data
            from past projects in .shp and .kmz file types (more options are in
            the works!)
            <br />
            <br /> Having the most current data is our primary goal, but some
            jurisdictions have antiquated access protocols thus limiting updates
            to some datasets. Data layers are either sourced through advanced
            programming interfaces (APIs), which offer a zero latency
            relationship between the data procurable from the jurisdiction and
            the data available through our database, meaning we are constantly
            'streaming' the same data, or it is uploaded and overwritten at the
            stated intervals found through the following link. If erroneous data
            is found through our database, a service ticket can be placed to
            investigate and rectify the issue.
          </p>
        </div>
      </div>
    </div>
  )
}
