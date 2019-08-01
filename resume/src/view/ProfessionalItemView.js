const renderProfessional = (job) => (`
  <figure class="job focusable">
    <div>
      <div class="company">${job.company}</div>
      <div class="title"><strong>${job.title}</strong> | ${job.time}</div>
      <ul class="highlights">
        ${job.highlights
          ? job.highlights
            .map(highlight => `<li class="highlight">${highlight}</li> `)
            .reduce((a, b) => a + b)
          : ''
        }
      </ul>


    </div>
  </figure>
`)

export default renderProfessional
