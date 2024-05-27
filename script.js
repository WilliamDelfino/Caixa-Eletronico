class Account {
    constructor() {
      this.balance = 0;
      this.history = [];
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error('Erro: Valores menores que 0 não são aceitos. Insira um valor válido para continuar.');
      }
      this.balance += amount;
      this.history.push({ operation: 'Depósito', amount });
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error('Valores menores que 0 não são aceitos. Insira um valor válido para continuar.');
      }
      if (amount > this.balance) {
        throw new Error('Saldo insuficiente');
      }
      this.balance -= amount;
      this.history.push({ operation: 'Saque', amount });
    }
  
    getBalance() {
      return this.balance;
    }
  
    getHistory() {
      return this.history;
    }
  }
  
  const account = new Account();
  
  // ...
  
  function performOperation() {
    const operation = document.getElementById('operation').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    try {
      if (operation === 'deposit') {
        account.deposit(amount);
      } else if (operation === 'withdraw') {
        account.withdraw(amount);
      }
      updateBalanceAndHistory();
    } catch (error) {
      alert(error.message);
    }
  }
  
  function updateBalanceAndHistory() {
    document.getElementById('balance').innerText = `R$ ${account.getBalance().toFixed(2)}`;
    updateHistoryList(account.getHistory());
  }
  
  function updateHistoryList(history) {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    for (let i = history.length - 1; i >= 0; i--) {
      const listItem = document.createElement('li');
      listItem.classList.add(history[i].operation.toLowerCase());
      listItem.innerText = ` '${history[i].operation}, Valor: R$ ${history[i].amount.toFixed(2)}`;
      historyList.appendChild(listItem);
    }
  }
    const executeButton = document.getElementById("execute-button");
    executeButton.addEventListener("click", performOperation);

    $('#amount').mask("#.##0,00", {reverse: false});