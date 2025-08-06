import React from "react";
import { Link} from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ productData, page, params }) {
  page = Number(page) || 1;
  const lastPage = productData.meta.last_page;

  const showNextPage = page < lastPage;
  const showPrevPage = page > 1;

  const getLinkWithPage = (pageNo) =>
    "?" + new URLSearchParams({ ...params, page: pageNo }).toString();

  return (
    <div className="flex justify-start items-center mt-10 mb-10 gap-2 flex-wrap">
      {showPrevPage && (
        <Link
          to={getLinkWithPage(page - 1)}
          className="p-2 rounded-full border border-orange-500 text-orange-700 hover:bg-orange-100"
        >
          <IoIosArrowBack size={20} />
        </Link>
      )}

      <span className="px-4 py-2 rounded border bg-orange-700 text-white">
        {page}
      </span>

      {showNextPage && (
        <Link
          to={getLinkWithPage(page + 1)}
          className="px-4 py-2 rounded border bg-white text-orange-700 border-orange-500 hover:bg-orange-100"
        >
          {page + 1}
        </Link>
      )}

      {showNextPage && (
        <Link
          to={getLinkWithPage(page + 1)}
          className="p-2 rounded-full border border-orange-500 text-orange-700 hover:bg-orange-100"
        >
          <IoIosArrowForward size={20} />
        </Link>
      )}
    </div>
  );
}

export default Pagination;


//URLSearchParams({ ...params, page: pageNo }) preserves existing query parameters (like query and sort) while updating only the page in the URL during pagination.