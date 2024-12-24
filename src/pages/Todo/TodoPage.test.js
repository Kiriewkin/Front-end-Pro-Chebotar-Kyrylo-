import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import TodoPage from ".";

describe('TodoPage', () => {
    test('renders the component TodoPage', () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        expect(screen.getByText('Todo')).toBeInTheDocument();
        expect(screen.getByText('TodoList:')).toBeInTheDocument();
    });

    test('adds new todo item', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Enter Todo');
        const addButton = screen.getByText('Submit');

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });
        fireEvent.click(addButton);

        const taskElement = await screen.findByText('Test Task');
        expect(taskElement).toBeInTheDocument();
    });

    test('removes todo item', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );
    
        const deleteButtons = screen.getAllByText('Delete');
        
        const todoItem = screen.getByText('delectus aut autem');
        expect(todoItem).toBeInTheDocument();

        fireEvent.click(deleteButtons[0]);

        await waitFor(() => {
            expect(screen.queryByText('delectus aut autem')).not.toBeInTheDocument();
        });
    });

    test('displays loading state', () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    
    test('toggles todo item completion', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const todoItem = screen.getByText('fugiat veniam minus');
        
        expect(todoItem.closest('div')).not.toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);

        await waitFor(() => {
            expect(todoItem.closest('div')).toHaveStyle('text-decoration: line-through');
        });
        
        fireEvent.click(todoItem);
        
        await waitFor(() => {
            expect(todoItem.closest('div')).not.toHaveStyle('text-decoration: line-through');
        });
    });
});
