function generatehtml(employees) {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <section class="hero is-info">
        <div class="hero-body has-text-centered">
          <p class="title">
            My Team
          </p>
        </div>
      </section>
    
    <section class="manager box box-color">
        <div class="position box">
            Manager
        </div>
        <div class="name block">
            Name: ${employees[0].name}
        </div> 
        <div class="email block">
            email: ${employees[0].email}
        </div>
        <div class="id block">
            ID: ${employees[0].id}
        </div>
        <div class="office block">
            Office Number: ${employees[0].officeNumber}
        </div>
    </section>

    <section class="intern box box-color">
        <div class="position box">
            Intern
        </div>
        <div class="name block">
            Name: ${employees[1].name}
        </div> 
        <div class="email block">
            email: ${employees[1].email}
        </div>
        <div class="id block">
            ID: ${employees[1].id}
        </div>
        <div class="school block">
            School: ${employees[1].school}
        </div>
    </section>

    <section class="engineer box">
        <div class="position box">
            Engineer: 
        </div>
        <div class="name block">
            Name: ${employees[2].name}
        </div> 
        <div class="email block">
            email: ${employees[2].email}
        </div>
        <div class="id block">
            ID: ${employees[2].id}
        </div>
        <div class="github block">
            GitHub: ${employees[2].github}
        </div>
    </section>

</body>
</html>`
}


module.exports = generatehtml