import { DollarSignIcon, ImageIcon, Package2Icon, PlusCircleIcon } from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">

        {/* CLOSE BUTTON (changed from form → div) */}
        <div className="close-btn-wrapper">
          <button
            onClick={() => document.getElementById("add_product_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            X
          </button>
        </div>

        {/* HEADER */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        {/* MAIN FORM (Keep this only) */}
        <form onSubmit={addProduct} className="space-y-6">
          <div className="grid gap-6">

            {/* PRODUCT NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Product Name</span>
              </label>
              <div className="relative">
                <Package2Icon className="absolute inset-y-0 left-3 size-5 text-base-content/50" />
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            {/* PRICE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative">
                <DollarSignIcon className="absolute inset-y-0 left-3 size-5 text-base-content/50" />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Image URL</span>
              </label>
              <div className="relative">
                <ImageIcon className="absolute inset-y-0 left-3 size-5 text-base-content/50" />
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="modal-action">

            {/* CANCEL BUTTON FIXED (form → button) */}
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => document.getElementById("add_product_modal").close()}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData.name || !formData.price || !formData.image || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP (form → div) */}
      <div className="modal-backdrop">
        <button onClick={() => document.getElementById("add_product_modal").close()}>
          close
        </button>
      </div>
    </dialog>
  );
}

export default AddProductModal;
