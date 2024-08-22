// *** Footer Javascript===================
const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="footer-col">
            <h4>Bikes</h4>
            <ul>
                <li><a href="./Popularbike.html">Popular Bike</a></li>
                <li><a href="./Latestbike.html">Latest Bike</a></li>
                <li><a href="./Upcomingbike.html">Upcoming Bike</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Brand</h4>
            <ul>
                <li><a href="./RoyalEnfied.html">Royal Enfield</a></li>
                <li><a href="./KTM.html">KTM</a></li>
                <li><a href="./Ducati.html">Ducati</a></li>
                <li><a href="./Kawasaki.html">Kawasaki</a></li>
                <li><a href="./BMW.html">BMW</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Category</h4>
            <ul>
                <li><a href="./Sportbike.html">Sport Bikes</a></li>
                <li><a href="./Cruiser.html">Cruiser Bikes</a></li>
                <li><a href="./Adventure.html">Adventure Bikes</a></li>
                <li><a href="./Naked.html">Naked Bikes</a></li>
            </ul>
        </div>
        <div class="footer-col">
        <a href="#" class="brand-logo">Speed<span>World</span></a>
        </div>
    </div>
</div>`;

}

createFooter();
// *** End Footer Javascript===================
