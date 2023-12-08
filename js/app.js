const sideMenu = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    sideMenu.style.display = 'block';
  }
})

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode-vars');
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

const OrdersDemoData = [
  {
    customerName: 'Joe Black',
    orderNumber: '34902340',
    paymentAmount: '€ 10,33',
    status: 'Pending'
  },
  {
    customerName: 'Robert Calling',
    orderNumber: '12139023',
    paymentAmount: '€ 1230,00',
    status: 'Declined'
  },
  {
    customerName: 'Steve Stevens',
    orderNumber: '23940324909',
    paymentAmount: '€ 123,20',
    status: 'Active'
  },
]

OrdersDemoData.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
        <td>${order.customerName}</td>
        <td>${order.orderNumber}</td>
        <td>${order.paymentAmount}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector('#recent-orders tbody').appendChild(tr);
});