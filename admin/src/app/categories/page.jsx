"use client";
import { Button, TextInput, Table } from "flowbite-react";

export default function Page() {
  return (
    <div className="">
      <div>
        <label>Create new Category</label>
        <div className="flex w-full mt-2">
          <input
            className=" border-none py-2 px-4 bg-slate-600 focus:bg-slate-800 mb-4 rounded-md mr-2 flex-grow"
            type="text"
          />
          <select className="border-none py-2 px-4 bg-slate-600 focus:bg-slate-800 mb-4 rounded-md mr-2">
            <option value="">No parent Category</option>
          </select>
          <Button>save</Button>
        </div>
      </div>
      <form className="" method="post">
        <Table>
          <Table.Head>
            <Table.HeadCell>Category name</Table.HeadCell>
            <Table.HeadCell>Parent Category</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Electronics
              </Table.Cell>
              <Table.Cell>Null</Table.Cell>
              <Table.Cell className="flex gap-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </form>
    </div>
  );
}
