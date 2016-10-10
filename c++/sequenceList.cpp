//顺序表
#include <iostream>
using namespace std;
class Vector {
    private:
        int size, length;
        int *data;
    public:
        Vector(int input_size) {
            size = input_size;
            length = 0;
            data = new int[size];
        }
        ~Vector() {
            delete[] data;
        }
        // loc 插入的位置 value 插入的元素值
        bool insert(int loc, int value) {
            if(loc < 0 || loc > length) {
                return false;
            }
            if(length >= size) {
                expand();
            }
            for(int i = length; i > loc; i--) {
                data[i] = data[i-1];
            }
            data[loc] = value;
            length++;
            return true;
        }
        //扩容
        void expand() {
            int *old_data = data;
            size = size *2;
            data = new int[size];
            for (int i = 0; i < length; ++i) {
                data[i] = old_data[i];
            }
            delete[] old_data;
        }
        //查找某一元素是否在顺序表中
        int search(int value) {
            for(int i = 0; i < length; i++) {
                if(data[i] == value) {
                    return i;
                }
            }
            return -1;
        }
        //删除操作
        bool remove(int index) {
            if(index < 0 || index >= length) {
                return false;
            }
            for(int i = index + 1; i < length; i++) {
                data[i-1] = data[i];
            }
            length--;
            return true;
        }
        //顺序表的遍历操作
        void print() {
            for(int i = 0; i < length; i++) {
                cout << data[i] << ' ';
            }
            cout << endl;
        }
};

int main() {

    return 0;

}

/*
 *  测试题
 *     输入:
 *      第一行输入两个整数 n(1 \leq n \leq 100)n(1≤n≤100) 和 k(0≤k≤n)，
 *     输出:
 *      输出只有一行，输出 nn 个整数，顺序输出循环左移后顺序表中每个元素的值，每个元素之间用一个空格分隔。行末不要有多余空格。
 *
 *     举例:
 *          输入: 8 3
 *
 *          输出: 4 5 6 7 8 1 2 3
 *
 *
 * */
