//Function to sort table by number of no sign outs on page load
window.onload = function() {
    function sortTable() {
        let tableBody = document.querySelector('tbody');
        let rows = Array.from(tableBody.getElementsByTagName('tr'));

        //Sort the rows Example: If signOutsB - signOutsA is negative then row A should be above row B
        rows.sort((a, b) => {
            let signOutsA = parseInt(a.getElementsByClassName('signOuts')[0].textContent);
            let signOutsB = parseInt(b.getElementsByClassName('signOuts')[0].textContent);
            return signOutsB - signOutsA;
        });

        rows.forEach(row => tableBody.appendChild(row));

        // getting first row to add the crown icon to 
        if (rows.length > 0) {
            let firstRow = rows[0];
            let techCell = firstRow.getElementsByTagName('td')[0];
            techCell.innerHTML = '<i class="fa-solid fa-crown" id="crown"></i> ' + techCell.innerHTML;
        }

        // Add thumbs down to the last row
        if (rows.length > 0) {
            let lastRow = rows[rows.length - 1];
            let techCellLast = lastRow.getElementsByTagName('td')[0];
            techCellLast.innerHTML = '<i class="fa-solid fa-thumbs-down"></i> ' + techCellLast.innerHTML;
        }
    }

    // actually calling the function to sort
    sortTable();
};
