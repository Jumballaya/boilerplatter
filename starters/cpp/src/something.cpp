#include "../include/something.h"
#include "../include/class.h"


int do_something(const std::string& s) {
  Foo f = Foo(10);
  f.setName(s);
  f.print();
  return f.getT();
};
