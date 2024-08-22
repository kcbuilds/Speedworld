// *** Footer Javascript===================
const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="footer-col">
            <h4>Bikes</h4>
            <ul>
                <li><a href="./Html Pages/Popularbike.html">Popular Bike</a></li>
                <li><a href="./Html Pages/Latestbike.html">Latest Bike</a></li>
                <li><a href="./Html Pages/Upcomingbike.html">Upcoming Bike</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Brand</h4>
            <ul>
                <li><a href="./Html Pages/RoyalEnfied.html">Royal Enfield</a></li>
                <li><a href="./Html Pages/KTM.html">KTM</a></li>
                <li><a href="./Html Pages/Ducati.html">Ducati</a></li>
                <li><a href="./Html Pages/Kawasaki.html">Kawasaki</a></li>
                <li><a href="./Html Pages/BMW.html">BMW</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Category</h4>
            <ul>
                <li><a href="./Html Pages/Sportbike.html">Sport Bikes</a></li>
                <li><a href="./Html Pages/Cruiser.html">Cruiser Bikes</a></li>
                <li><a href="./Html Pages/Adventure.html">Adventure Bikes</a></li>
                <li><a href="./Html Pages/Naked.html">Naked Bikes</a></li>
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
