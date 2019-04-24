#ifndef H_CLASS
#define H_CLASS
#include <string>
#include <iostream>

class Foo {
  private:
    int         t;
    std::string name;

  public:
    Foo(int);

    void print();
    void setName(std::string name);
    int  getT();
};

#endif
