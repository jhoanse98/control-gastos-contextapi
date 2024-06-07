import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";

const BudgetTracker = () => {
  const { remainingBudget, totalExpenses, state } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfica de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Resetear APP
        </button>

        <AmountDisplay label="presupuesto" amount={state.budget} />
        <AmountDisplay label="disponible" amount={remainingBudget} />
        <AmountDisplay label="gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
