import Transaction from "../models/Transaction.js";

export const addTransaction = async (req,res) =>{

    try{
    
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    }catch (error){
        res.status(400).json({message: error.message});
    }
};

// All 

export const getTransactions = async (req,res) =>{

    try{

        const transactions = await Transaction.find();
        res.status(200).json(transactions);

    }catch(error){
        res.status(400).json({message: error.message});
    }
};


// ById 

export const getTransactionById = async (req,res) =>{
    try{

        const transaction = await Transaction.findById(req.params.id);
        if (transaction){
            res.status(200).json(transaction);
        }else{
            res.status(404).json({message: "Error : This Transaction is not found"});
        }

    }catch(error){
        res.status(400).json({message: error.message});
    }
};

// update

export const updateTransaction = async (req, res) => {
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate (

        req.params.id,
        req.body,

        { new: true }

      );

      if (updatedTransaction) {
        res.status(200).json(updatedTransaction);

      } else {
        res.status(404).json({ message: "Error : This Transaction is not found" });
      }

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

export const deleteTransaction = async (req,res)=>{
    try{
        const transaction = await Transaction.findByIdAndDelete(req.params.id);

        if(transaction){
            res.status(200).json({message: "This Transaction has been deleted Successfully "});

        }else{
            res.status(404).json({message: "Error : This Transaction is not found"});
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

export const getSummary = async(req,res)=>{
    try{
        const transactions = await Transaction.find();
        const income = transactions.filter(t => t.type === "income").reduce((acc,cur)=> acc + cur.amount,0);
        const expenses = transactions.filter(t => t.type === "expense").reduce((acc,cur)=> acc + cur.amount,0);
        const balance = income - expenses;
        res.status(200).json({income,expenses,balance});

    }catch(error){
        res.status(404).json({message: error.message});
    }
};