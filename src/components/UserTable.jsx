import React from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { FaEllipsisV, FaEllipsisH, FaTh, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const defaultData = [
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=1',
        fullName: 'Leslie Maya',
        email: 'leslie@gmail.com',
        location: 'Los Angeles, CA',
        joined: 'October 2, 2010',
        permissions: 'Admin',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=2',
        fullName: 'Josie Deck',
        email: 'josie@gmail.com',
        location: 'Cheyenne, WY',
        joined: 'October 3, 2011',
        permissions: 'Admin',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=3',
        fullName: 'Alex Pfeiffer',
        email: 'alex@gmail.com',
        location: 'Cheyenne, WY',
        joined: 'May 20, 2015',
        permissions: 'Admin',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=4',
        fullName: 'Mike Dean',
        email: 'mike@gmail.com',
        location: 'Syracuse, NY',
        joined: 'July 14, 2015',
        permissions: 'Contributor',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=5',
        fullName: 'Mateus Cunha',
        email: 'cunha@gmail.com',
        location: 'Luanda, AN',
        joined: 'October, 2016',
        permissions: 'Contributor',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=6',
        fullName: 'Nzola Uemo',
        email: 'nzola@gmail.com',
        location: 'Lagos, NG',
        joined: 'June 5, 2016',
        permissions: 'Viewer',
    },

    {
        avatarUrl: 'https://i.pravatar.cc/32?img=7',
        fullName: 'Antony Mack',
        email: 'mack@gmail.com',
        location: 'London, ENG',
        joined: 'June 15, 2015',
        permissions: 'Contributor',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=8',
        fullName: 'André da Silva',
        email: 'andré@gmail.com',
        location: 'São Paulo, BR',
        joined: 'March 13, 2018',
        permissions: 'Contributor',
    },
    {
        avatarUrl: 'https://i.pravatar.cc/32?img=9',
        fullName: 'Jorge Ferreira',
        email: 'jorge@gmail.com',
        location: 'Huambo, Angola',
        joined: 'March 14, 2018',
        permissions: 'Contributor',
    },
];

const columnHelper = createColumnHelper();

// ----------------------------------------------------
// 1. تعريف الأعمدة (Columns Definition)
// ----------------------------------------------------
const columns = [
    columnHelper.display({
        id: 'select',
        header: () => (
            <input
                type="checkbox"
            />
        ),
        cell: ({ row }) => (
            <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
            />
        ),
        size: 50,
    }),

    columnHelper.accessor('fullName', {
        header: () => 'Full Name',
        cell: (info) => (
            <div className="full-name-cell">
                <img
                    src={info.row.original.avatarUrl}
                    alt={info.getValue()}
                    className="avatar-icon"
                />
                {info.getValue()}
            </div>
        ),
    }),

    columnHelper.accessor('email', {
        header: () => 'Email Address',
    }),

    columnHelper.accessor('location', {
        header: 'Location',
    }),

    columnHelper.accessor('joined', {
        header: 'Joined',
    }),

    columnHelper.accessor('permissions', {
        header: () => (
            <div className="permissions-header">
                Permissions <FaChevronRight style={{ transform: 'rotate(90deg)', fontSize: '0.7em' }} />
            </div>
        ),
        cell: (info) => (
            <span className={`permission-badge ${info.getValue().toLowerCase()}`}>
                {info.getValue()}
            </span>
        ),
    }),

    columnHelper.display({
        id: 'actions',
        header: '',
        cell: ({ row, table }) => {
            const { openMenuId, setOpenMenuId } = table.options.meta;
            const isMenuOpen = openMenuId === row.id;

            return (
                <div
                    className="actions-cell"
                    style={{ position: 'relative' }}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(isMenuOpen ? null : row.id);
                        }}
                    >
                        <FaEllipsisV style={{ color: '#ccc' }} />
                    </button>

                    {isMenuOpen && (
                        <div
                            className="action-dropdown"
                        >
                            <button onClick={() => alert(`Showing details for: ${row.original.fullName}`)} >Show</button>
                            <button onClick={() => alert(`Editing user: ${row.original.fullName}`)} >Edit</button>
                            <button onClick={() => alert(`Deleting user: ${row.original.fullName}`)} >Delete</button>
                        </div>
                    )}
                </div>
            );
        },
    }),
];


// 2. مكون الجدول الرئيسي (UserTable)
// ----------------------------------------------------
export default function UserTable() {
    const [data] = React.useState(defaultData);
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [openMenuId, setOpenMenuId] = React.useState(null);
    const [isPermissionsFilterOpen, setIsPermissionsFilterOpen] = React.useState(false);
    const [isJoinedFilterOpen, setIsJoinedFilterOpen] = React.useState(false);

    const [pagination, setPagination] = React.useState({
        pageIndex: 0, // ابدأ بالصفحة الأولى (الفهرس 0)
        pageSize: 10,  // حجم صفحة صغير لتظهر الصفحات المتعددة
    });

    React.useEffect(() => {
        const handleClickOutside = () => setOpenMenuId(null);
        if (openMenuId !== null) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openMenuId]);


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination, // تمرير حالة التصفح
        },
        meta: {
            openMenuId,
            setOpenMenuId,
        }
    });

    // مكون قائمة الفلترة المنسدلة
    const FilterDropdown = ({ options, onClose }) => (
        <div className="filter-dropdown-menu">
            {options.map((option, index) => (
                <button key={index} onClick={(e) => {
                    e.stopPropagation();
                    alert(`Selected: ${option}`);
                    onClose();
                }}>
                    {option}
                </button>
            ))}
        </div>
    );

    const NewUserForm = () => (
        <div
            className="form-overlay"
        >
            <div
                className="form-modal"
            >
                <h3>Add New User</h3>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Location" />
                <select >
                    <option>Admin</option>
                    <option>Contributor</option>
                    <option>Viewer</option>
                </select>
                <div >
                    <button onClick={() => setIsFormOpen(false)} >Cancel</button>
                    <button >Save User</button>
                </div>
            </div>
        </div>
    );


    // مكون التصفح (Pagination)
    const TablePagination = () => (
        <div className="pagination-controls">
            <div className="page-numbers">
                <button className="page-nav" disabled><FaChevronLeft /></button>
                <button className="page-num active">1</button>
                <button className="page-num">2</button>
                <button className="page-num">3</button>
                <span className="dots">...</span>
                <button className="page-num">10</button>
                <button className="page-nav"><FaChevronRight /></button>
            </div>
            <div className="show-rows">
                <span>Show:</span>
                <button>10 rows <FaChevronRight style={{ transform: 'rotate(90deg)' }} /></button>
            </div>
        </div>
    );


    return (

        <div
            className="user-management-container"

        >


            <div className="toolbar" >
                <h2>User Management</h2>

                <div className="controls" >


                    <div className="left-controls-group">

                        {/* حقل البحث */}
                        <input type="text" placeholder="Search items..." className="search-input" />

                        <div className="filter-group">
                            <button
                                className="filter-button"
                                onClick={() => {
                                    setIsPermissionsFilterOpen(!isPermissionsFilterOpen);
                                    setIsJoinedFilterOpen(false);
                                }}
                            >
                                Permissions <FaChevronRight style={{ transform: 'rotate(90deg)', fontSize: '0.8em', marginLeft: '5px' }} />
                            </button>
                            {isPermissionsFilterOpen && (
                                <FilterDropdown
                                    options={['Admin', 'Contributor', 'Viewer', 'All']}
                                    onClose={() => setIsPermissionsFilterOpen(false)}
                                />
                            )}
                        </div>


                        <div className="filter-group">
                            <button
                                className="filter-button"
                                style={{ backgroundColor: '#444' }}
                                onClick={() => {
                                    setIsJoinedFilterOpen(!isJoinedFilterOpen);
                                    setIsPermissionsFilterOpen(false);
                                }}
                            >
                                Joined Anytime<FaChevronRight style={{ transform: 'rotate(90deg)', fontSize: '0.8em', marginLeft: '5px' }} />
                            </button>
                            {isJoinedFilterOpen && (
                                <FilterDropdown
                                    options={['Today', 'This Week', 'This Month', 'Anytime']}
                                    onClose={() => setIsJoinedFilterOpen(false)}
                                />
                            )}
                        </div>

                    </div>

                    <div className="right-controls-group">

                        <FaTh style={{ cursor: 'pointer', color: '#ccc' }} />
                        <FaEllipsisH style={{ cursor: 'pointer', color: '#ccc' }} />


                        <button
                            className="export-button"
                            onClick={() => alert('Exporting data...')}
                        >
                            Export
                        </button>

                        <button
                            className="new-user-button"
                            onClick={() => setIsFormOpen(true)}
                        >
                            + New User
                        </button>
                    </div>
                </div>
            </div>

            {isFormOpen && <NewUserForm />}

            {/* الجدول نفسه */}
            <div className="table-wrapper" >
                <table
                    className="user-data-table"
                >
                    {/* الرأس */}
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} >
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    {/* جسم الجدول */}
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* التصفح */}
            <TablePagination />


        </div>
    );
}