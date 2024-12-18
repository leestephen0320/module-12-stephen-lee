import Project from '../components/Project'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function PortfolioPage() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div className='row'>
          <div className="card-group">
            <Project title='README Generator' link='https://github.com/leestephen0320/README-stephen-lee' imgSrc='https://silentlad.com/static/d5eedc11e4a6ab67570e5ce78ea67d5f/ad531/r2.png'/>

            <Project title='Tow Truck Simulation' link='https://github.com/leestephen0320/module-8-challenge-stephen-lee' imgSrc='https://lirp.cdn-website.com/b3cc06cc/dms3rep/multi/opt/Motorcycle+towing+Las+Vegas-640w.png'/>
          </div>
        </div>

        <div className='row'>
          <div className="card-group">
            <Project title='Weather Forecast Website' link='https://github.com/leestephen0320/module-09-challenge' imgSrc='https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/arroyo%20burro%20beach%20santa%20barbara%20damian%20gadal%201280x642.jpg.webp?itok=hTEL3h5r'/>

            <Project title='Employee Tracker App' link='https://github.com/leestephen0320/module-10-challenge-stepehen-lee' imgSrc='https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8'/>
          </div>
        </div>

        <div className='row'>
          <div className="card-group">
            <Project title='Personal Profile Website' link='https://github.com/leestephen0320/module-12-stephen-lee' imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKDkW6Irk6pvAXWLRa6jZe0RStRumZ74K3g&s'/>

            <Project title='Street Fighter 6 Website' link='https://github.com/achoi2k20/button-mashing' imgSrc='https://www.psu.com/wp/wp-content/uploads/2023/02/Street-Fighter-6-PS5-Wallpapers-01-768x432.jpg'/>
          </div>
        </div>

        <div className='row'>
          <div className="card-group">
            <Project title='Online Escape Room' link='https://github.com/vluu11/escAPI' imgSrc='https://images.squarespace-cdn.com/content/v1/5864ea486b8f5bbf07e01494/1494619558456-F3YUQD1XADZJ1FFQOIID/The+Attic-2.jpg'/>

            <Project title='Joke Forum' link='https://github.com/Elimck11/DailyChuckle-' imgSrc='https://github.com/Elimck11/DailyChuckle-/blob/main/client/src/assets/logo.png?raw=true'/>
          </div>
        </div>

      </div>
    );
  }
  