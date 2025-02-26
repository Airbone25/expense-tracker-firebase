import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { auth, db } from "@/config/firebase_config";
import { addDoc, collection } from "firebase/firestore";

function TrackerPage() {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("income")
  const userId = auth?.currentUser?.uid

  const transactionCollectionRef = collection(db,"expense")

  async function addExpense(){
    await addDoc(transactionCollectionRef,{
      amount: amount,
      description: description,
      type: type,
      userId: userId
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Total Balance: $0.00</h2>
          <Separator className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-green-600">Income: $0.00</span>
            <span className="text-red-500">Expense: $0.00</span>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <RadioGroup value={type} onValueChange={setType} className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <RadioGroupItem value="income" />
              <span>Income</span>
            </label>
            <label className="flex items-center space-x-2">
              <RadioGroupItem value="expense" />
              <span>Expense</span>
            </label>
          </RadioGroup>
          <Button onClick={addExpense} className="w-full">Add Transaction</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={transaction.type === "income" ? "text-green-600" : "text-red-500"}>
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default TrackerPage
